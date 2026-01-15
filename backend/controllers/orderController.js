import Order from '../models/Order.js';

// 1. අලුත් Order එකක් දැමීම (Create Order)
export const addOrderItems = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x.product,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    // --- 🔥 SOCKET.IO TRIGGER ---
    // Order එකක් හැදුන ගමන් මුළු ඇප් එකටම කියනවා
    const io = req.app.get('socketio');
    io.emit('new_order_created', createdOrder); // 'new_order_created' කියන නමින් පණිවිඩය යවනවා

    res.status(201).json(createdOrder);
  }
};

// 2. User ගේ Orders ගැනීම (Get My Orders)
export const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

// 3. ID එකෙන් Order එකක් ගැනීම (Get Order By ID)
export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
};

// 4. Order එකක් Pay කළ බවට Mark කිරීම
export const updateOrderToPaid = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
};

// 5. Admin: සියලුම Orders ලබා ගැනීම (මේක තමයි Admin ට ඕන ෆන්ෂන් එක)
export const getOrders = async (req, res) => {
  try {
    // .find({}) මගින් සියලුම Orders ගන්නවා (User කෙනෙක්ට සීමා නොවී)
    const orders = await Order.find({}).populate('user', 'id name').sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 6. Admin: Order එකක් Delivered ලෙස Mark කිරීම
export const updateOrderToDelivered = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
};

// 7. Order එකක් Delete කිරීම (Admin Only)
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      await order.deleteOne();
      res.json({ message: 'Order removed' });
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};