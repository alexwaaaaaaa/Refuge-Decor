// Conversion tracking utilities

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
}

export function trackPageView(pagePath: string, pageTitle: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
}

export function trackConversion(conversionType: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: process.env.NEXT_PUBLIC_GA_ID,
      value: value,
      currency: 'USD',
    });
  }
}

// Specific conversion events
export function trackContactFormSubmit() {
  trackEvent('contact_form_submit', {
    event_category: 'lead_generation',
    event_label: 'contact',
  });
  trackConversion('contact_form');
}

export function trackConsultationBooking() {
  trackEvent('consultation_booking', {
    event_category: 'lead_generation',
    event_label: 'consultation',
  });
  trackConversion('consultation_booking', 50); // Estimated value
}

export function trackPortfolioItemClick(projectName: string) {
  trackEvent('portfolio_click', {
    event_category: 'engagement',
    event_label: projectName,
  });
}

export function trackQuizCompletion(styleResult: string) {
  trackEvent('quiz_completion', {
    event_category: 'engagement',
    event_label: styleResult,
  });
}

export function trackCTAClick(ctaLocation: string, ctaText: string) {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: `${ctaLocation}_${ctaText}`,
  });
}
