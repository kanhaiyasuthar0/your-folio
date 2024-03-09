// const paymentSchema = new Schema({
//     order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
//     user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//     transactionId: String, // Provided by the payment gateway
//     amount: { type: Number, required: true },
//     status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
//     method: String, // e.g., PayPal, Stripe, Credit Card
//   }, { timestamps: true });
