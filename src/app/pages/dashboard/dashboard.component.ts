import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  stats = [
    { title: 'Users', value: 1234, icon: 'fas fa-users' },
    { title: 'Revenue', value: '$12,345', icon: 'fas fa-dollar-sign' },
    { title: 'Active Sessions', value: 234, icon: 'fas fa-chart-line' },
    { title: 'New Signups', value: 56, icon: 'fas fa-user-plus' }
  ];

  // Data for charts
  barChartData = [12, 19, 3, 5, 2, 3];
  pieChartData = [45, 25, 20, 10];
  chartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
  pieChartLabels = ['Active Users', 'New Users', 'Churned Users', 'Inactive Users'];

  constructor() {}

  ngAfterViewInit(): void {
    this.renderBarChart();
    this.renderPieChart();
  }

  // Render the Bar Chart
  renderBarChart() {
    const canvas = <HTMLCanvasElement>document.getElementById('barChart');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const data = this.barChartData;
      const labels = this.chartLabels;
      
      // Clear any previous chart
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set chart styling
      ctx.fillStyle = '#1abc9c';
      ctx.strokeStyle = '#16a085';
      ctx.lineWidth = 3;

      // Max and scaling
      const maxValue = Math.max(...data);
      const scaleY = (canvas.height - 20) / maxValue;
      const scaleX = canvas.width / (data.length + 1);

      // Draw bars and labels
      data.forEach((value, i) => {
        const barHeight = value * scaleY;
        ctx.fillRect((i + 1) * scaleX - 15, canvas.height - barHeight - 10, 30, barHeight);
        ctx.fillStyle = '#34495e';
        ctx.textAlign = 'center';
        ctx.fillText(labels[i], (i + 1) * scaleX, canvas.height - 5);
      });
    }
  }

  // Render Pie Chart
  renderPieChart() {
    const canvas = <HTMLCanvasElement>document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const data = this.pieChartData;
      const labels = this.pieChartLabels;
      const total = data.reduce((acc, value) => acc + value, 0);

      // Clear previous chart
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let startAngle = 0;
      data.forEach((value, i) => {
        const sliceAngle = (value / total) * 2 * Math.PI;

        ctx.fillStyle = this.getRandomColor();
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();

        // Draw labels
        const midAngle = startAngle + sliceAngle / 2;
        const labelX = canvas.width / 2 + (canvas.width / 3) * Math.cos(midAngle);
        const labelY = canvas.height / 2 + (canvas.width / 3) * Math.sin(midAngle);
        ctx.fillStyle = '#2c3e50';
        ctx.textAlign = 'center';
        ctx.fillText(labels[i], labelX, labelY);

        startAngle += sliceAngle;
      });
    }
  }

  // Helper function to generate random colors for the pie chart
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

