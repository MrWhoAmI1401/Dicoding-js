import { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder } from './orders.js';

// Menambahkan pesanan pertama
addOrder('Alice', [
  { name: 'Nasi Goreng', price: 20000 },
  { name: 'Teh Manis', price: 5000 }
]);

// Menambahkan pesanan kedua
addOrder('Bob', [
  { name: 'Mie Goreng', price: 15000 },
  { name: 'Kopi', price: 10000 }
]);

// Menampilkan daftar pesanan setelah penambahan
console.log(orders);

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   }
 * ]
 */

// Memperbarui status pesanan
updateOrderStatus(orders[0].id, 'Diproses');
updateOrderStatus(orders[1].id, 'Selesai');

// Menampilkan daftar pesanan setelah pembaruan status
console.log(orders);

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Diproses'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */

// Menghitung total pendapatan untuk pesanan yang berstatus 'Selesai'
console.log(calculateTotalRevenue());  // Output yang diharapkan: 25000

// Menghapus pesanan pertama
deleteOrder(orders[0].id);

// Menampilkan daftar pesanan setelah penghapusan
console.log(orders);

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */
