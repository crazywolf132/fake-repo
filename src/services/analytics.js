// Analytics service for tracking user behavior
class AnalyticsService {
  constructor() {
    this.events = [];
  }

  track(eventName, properties = {}) {
    const event = {
      name: eventName,
      timestamp: new Date(),
      properties,
      sessionId: this.getSessionId()
    };
    
    this.events.push(event);
    this.sendToAnalytics(event);
  }

  getSessionId() {
    // Simple session ID generation
    return Math.random().toString(36).substr(2, 9);
  }

  async sendToAnalytics(event) {
    // Send to analytics provider
    console.log('Analytics event:', event);
  }

  getEvents() {
    return this.events;
  }
}

module.exports = new AnalyticsService();