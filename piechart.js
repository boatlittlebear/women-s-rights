let doughnut = document.getElementById('chartDoughnut').getContext('2d');
let labels = ['ค่าตอบแทน', 'งานขาดต่อเนื่อง', 'งานหนัก', 'ไม่มีสวัสดิการ', 'ทำงานไม่ตรงเวลา', 'ไม่มีวันหยุด', 'ชั่วโมงทำงานเยอะเกินไป', 'ลาหยุดหรือลาพักผ่อนไม่ได้']; 
let colorHex = ['#f56061', '#ff8358', '#ffa02e', '#fbb815', '#ffda7d', '#00727d', '#023767', '#7c539d'];

let chartDoughnut = new Chart(doughnut, {
  type: 'doughnut',
  data: {
    //  labels: labels,
    datasets: [{
      data: [58.1, 14.8, 11.5, 9, 2.8, 1.4, 1.4, 1],
      backgroundColor: colorHex
    }],
  },
  
  option: {
    responsive: true
  }
})

chartDoughnut.canvas.parentNode.style.height = '100%'; 
chartDoughnut.canvas.parentNode.style.width = '30vh';