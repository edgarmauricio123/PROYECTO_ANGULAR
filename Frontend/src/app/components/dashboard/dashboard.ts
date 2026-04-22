import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements AfterViewInit {

  ngAfterViewInit(): void {

    const ctx = document.getElementById('miGrafica') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: 'Ventas',
          data: [10, 25, 15, 30, 20, 35],
          borderWidth: 2,
          tension: 0.4 // curva suave tipo dashboard
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

  }

}