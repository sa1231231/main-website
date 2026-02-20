type AnalyticsEvent = {
  name: string;
  properties?: Record<string, any>;
};

class Analytics {
  private static instance: Analytics;
  private debug: boolean = true;

  private constructor() {}

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  public track(name: string, properties?: Record<string, any>) {
    if (this.debug) {
      console.log(`[Analytics] ${name}`, properties);
    }
    // In a real app, this would send data to Segment/Mixpanel/Google Analytics
  }
}

export const analytics = Analytics.getInstance();
