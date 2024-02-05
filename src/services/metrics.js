// Performance metrics collection
const os = require('os');

class MetricsCollector {
  constructor() {
    this.metrics = {
      requests: 0,
      errors: 0,
      avgResponseTime: 0,
      responseTimes: []
    };
  }

  recordRequest(duration, statusCode) {
    this.metrics.requests++;
    
    if (statusCode >= 400) {
      this.metrics.errors++;
    }
    
    this.metrics.responseTimes.push(duration);
    this.calculateAverage();
  }

  calculateAverage() {
    const sum = this.metrics.responseTimes.reduce((a, b) => a + b, 0);
    this.metrics.avgResponseTime = sum / this.metrics.responseTimes.length || 0;
  }

  getSystemMetrics() {
    return {
      cpuUsage: process.cpuUsage(),
      memoryUsage: process.memoryUsage(),
      uptime: process.uptime(),
      loadAverage: os.loadavg()
    };
  }

  reset() {
    this.metrics = {
      requests: 0,
      errors: 0,
      avgResponseTime: 0,
      responseTimes: []
    };
  }
}

module.exports = new MetricsCollector();