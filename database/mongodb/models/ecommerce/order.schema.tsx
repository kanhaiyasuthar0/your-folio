// const orderItemSchema = new Schema({
//     product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
//     quantity: { type: Number, required: true },
//     priceAtPurchase: { type: Number, required: true },
//   }, { timestamps: true });

//   const orderSchema = new Schema({
//     user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//     items: [orderItemSchema],
//     totalCost: { type: Number, required: true },
//     status: { type: String, required: true, enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
//     shippingAddress: {
//       type: String,
//       required: true,
//     },
//     paymentMethod: String,
//     paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
//   }, { timestamps: true });
