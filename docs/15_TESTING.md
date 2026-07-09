# Testing: Refuge Decor & Designs LLC

## Unit Testing

### Unit Testing Strategy
- **Framework**: Jest and React Testing Library
- **Coverage Target**: 80% code coverage
- **Test Files**: Co-located with components (Component.test.tsx)
- **Testing Philosophy**: Test behavior, not implementation
- **Mocking**: Mock external dependencies

### Unit Testing Implementation
```typescript
// components/ui/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders button text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    screen.getByText('Click me').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant styles', () => {
    const { container } = render(<Button variant="primary">Click me</Button>);
    expect(container.firstChild).toHaveClass('bg-accent');
  });
});
```

### Unit Testing Requirements
- **Components**: Test all UI components
- **Hooks**: Test custom hooks
- **Utilities**: Test utility functions
- **Coverage**: 80% minimum coverage
- **CI/CD**: Run tests in CI/CD

## Integration Testing

### Integration Testing Strategy
- **Framework**: Playwright
- **Scope**: Test user flows across components
- **Test Files**: Separate integration test directory
- **Testing Philosophy**: Test user journeys, not components
- **Data**: Use test data, not production data

### Integration Testing Implementation
```typescript
// tests/integration/contact-form.spec.ts
import { test, expect } from '@playwright/test';

test('user can submit contact form', async ({ page }) => {
  await page.goto('/contact');
  
  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="email"]', 'john@example.com');
  await page.fill('textarea[name="message"]', 'Test message');
  
  await page.click('button[type="submit"]');
  
  await expect(page.locator('text=Thank you for reaching out')).toBeVisible();
});

test('user can navigate to project page', async ({ page }) => {
  await page.goto('/work');
  
  await page.click('text=View Project');
  
  await expect(page).toHaveURL(/\/work\/[^/]+$/);
});
```

### Integration Testing Requirements
- **User Flows**: Test critical user flows
- **Navigation**: Test navigation between pages
- **Forms**: Test form submissions
- **Authentication**: Test authentication (if added)
- **CI/CD**: Run tests in CI/CD

## Visual Regression

### Visual Regression Strategy
- **Framework**: Percy or Chromatic
- **Scope**: Test all visual components
- **Test Files**: Visual snapshots for each component
- **Testing Philosophy**: Catch visual regressions
- **Review**: Manual review of visual changes

### Visual Regression Implementation
```typescript
// Visual regression with Percy
import { percySnapshot } from '@percy/playwright';

test('hero section visual regression', async ({ page }) => {
  await page.goto('/');
  await percySnapshot(page, 'Hero Section');
});

test('project card visual regression', async ({ page }) => {
  await page.goto('/work');
  await percySnapshot(page, 'Project Grid');
});
```

### Visual Regression Requirements
- **Components**: Visual snapshots for all components
- **Pages**: Visual snapshots for all pages
- **Responsive**: Visual snapshots for mobile, tablet, desktop
- **Review**: Manual review of changes
- **CI/CD**: Run tests in CI/CD

## Accessibility Testing

### Accessibility Testing Strategy
- **Automated**: Lighthouse, axe DevTools
- **Manual**: Keyboard navigation, screen reader testing
- **Tools**: NVDA, VoiceOver, JAWS
- **Frequency**: Regular accessibility testing
- **Documentation**: Document accessibility issues

### Accessibility Testing Implementation
```typescript
// Automated accessibility testing with axe
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('has no accessibility violations', async () => {
  const { container } = render(<Button>Click me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Accessibility Testing Requirements
- **Automated**: Run axe on all pages
- **Manual**: Manual keyboard and screen reader testing
- **WCAG**: WCAG 2.1 AA compliance
- **Frequency**: Test before each release
- **Documentation**: Document and track accessibility issues

## Playwright

### Playwright Strategy
- **E2E Testing**: End-to-end testing with Playwright
- **Scope**: Test critical user journeys
- **Test Files**: tests/e2e directory
- **Testing Philosophy**: Test real user scenarios
- **Parallel**: Run tests in parallel for speed

### Playwright Implementation
```typescript
// tests/e2e/user-journey.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Journey', () => {
  test('new user explores site and submits contact form', async ({ page }) => {
    // Navigate to home
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Design That Feels Like Home');
    
    // Explore work
    await page.click('text=View Our Work');
    await expect(page).toHaveURL('/work');
    
    // View project
    await page.click('text=View Project');
    await expect(page).toHaveURL(/\/work\/[^/]+$/);
    
    // Navigate to contact
    await page.click('text=Contact');
    await expect(page).toHaveURL('/contact');
    
    // Submit form
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('textarea[name="message"]', 'Test message');
    await page.click('button[type="submit"]');
    
    // Verify success
    await expect(page.locator('text=Thank you for reaching out')).toBeVisible();
  });
});
```

### Playwright Requirements
- **E2E Tests**: Test critical user journeys
- **Browsers**: Test Chrome, Firefox, Safari
- **Devices**: Test mobile, tablet, desktop
- **CI/CD**: Run tests in CI/CD
- **Parallel**: Run tests in parallel

## Lighthouse

### Lighthouse Strategy
- **Performance**: Run Lighthouse on all pages
- **Accessibility**: Run Lighthouse accessibility audits
- **SEO**: Run Lighthouse SEO audits
- **Best Practices**: Run Lighthouse best practices audits
- **CI/CD**: Run Lighthouse in CI/CD

### Lighthouse Implementation
```typescript
// Lighthouse CI configuration
// lighthouserc.json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:3000",
        "http://localhost:3000/about",
        "http://localhost:3000/services",
        "http://localhost:3000/work",
        "http://localhost:3000/contact"
      ]
    },
    "assert": {
      "preset": "lighthouse:recommended"
    }
  }
}
```

### Lighthouse Requirements
- **Performance**: 90+ score on all pages
- **Accessibility**: 90+ score on all pages
- **SEO**: 90+ score on all pages
- **Best Practices**: 90+ score on all pages
- **CI/CD**: Run Lighthouse in CI/CD

## Cross Browser

### Cross Browser Strategy
- **Browsers**: Chrome, Firefox, Safari, Edge
- **Versions**: Latest two versions of each browser
- **Testing**: Manual cross browser testing
- **Tools**: BrowserStack or CrossBrowserTesting
- **Frequency**: Test before each release

### Cross Browser Testing Requirements
- **Chrome**: Test on latest two versions
- **Firefox**: Test on latest two versions
- **Safari**: Test on latest two versions
- **Edge**: Test on latest two versions
- **Mobile**: Test on iOS Safari and Chrome Mobile

## Responsive Testing

### Responsive Testing Strategy
- **Breakpoints**: Test mobile (375px), tablet (768px), desktop (1200px)
- **Tools**: Chrome DevTools, BrowserStack
- **Testing**: Manual responsive testing
- **Automation**: Automated responsive testing with Playwright
- **Frequency**: Test before each release

### Responsive Testing Implementation
```typescript
// Playwright responsive testing
test.describe('Responsive Design', () => {
  const devices = ['iPhone 12', 'iPad', 'Desktop Chrome'];
  
  devices.forEach(device => {
    test(`displays correctly on ${device}`, async ({ page }) => {
      await page.goto('/');
      await page.setViewportSize({ width: 375, height: 667 });
      
      // Test mobile-specific behavior
      await expect(page.locator('nav')).toBeVisible();
    });
  });
});
```

### Responsive Testing Requirements
- **Mobile**: Test on 375px width
- **Tablet**: Test on 768px width
- **Desktop**: Test on 1200px width
- **Large Desktop**: Test on 1920px width
- **Orientation**: Test portrait and landscape

## Manual QA

### Manual QA Strategy
- **Checklist**: Comprehensive QA checklist
- **Testing**: Manual testing of all features
- **Documentation**: Document all bugs and issues
- **Frequency**: Manual QA before each release
- **Sign-off**: QA sign-off required for release

### Manual QA Checklist
- [ ] All pages load correctly
- [ ] All links work
- [ ] All forms submit correctly
- [ ] All images load
- [ ] Navigation works on all devices
- [ ] Keyboard navigation works
- [ ] Screen reader works
- [ ] Forms validate correctly
- [ ] Error messages display correctly
- [ ] Success messages display correctly
- [ ] 3D scene loads (if applicable)
- [ ] Animations work smoothly
- [ ] Performance is acceptable
- [ ] Accessibility is maintained

### Manual QA Requirements
- **Pre-Release**: Manual QA before each release
- **Documentation**: Document all bugs and issues
- **Tracking**: Track bugs in issue tracker
- **Sign-off**: QA sign-off required for release
- **Regression**: Regression testing for bug fixes

## Acceptance Tests

### Acceptance Testing Strategy
- **Criteria**: Acceptance criteria defined in implementation plan
- **Testing**: Test against acceptance criteria
- **Documentation**: Document acceptance test results
- **Sign-off**: Stakeholder sign-off required
- **Release**: Release only after acceptance

### Acceptance Testing Implementation
```typescript
// Acceptance tests
describe('Acceptance Criteria', () => {
  it('home page loads in under 2 seconds', async () => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(2000);
  });

  it('contact form submits successfully', async ({ page }) => {
    await page.goto('/contact');
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('textarea[name="message"]', 'Test message');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Thank you for reaching out')).toBeVisible();
  });
});
```

### Acceptance Testing Requirements
- **Criteria**: Test against all acceptance criteria
- **Documentation**: Document test results
- **Sign-off**: Stakeholder sign-off required
- **Release**: Release only after acceptance
- **Regression**: Regression testing for changes

## Testing Strategy

### Testing Pyramid
- **Unit Tests**: 70% of tests (fast, isolated)
- **Integration Tests**: 20% of tests (medium speed, component integration)
- **E2E Tests**: 10% of tests (slow, user journeys)

### Testing Philosophy
- **Test Behavior**: Test what users experience, not implementation
- **Test User Journeys**: Focus on critical user journeys
- **Test Early**: Test early and often
- **Test Automatically**: Automate what can be automated
- **Test Manually**: Manual testing for what can't be automated

### Testing Tools
- **Unit Testing**: Jest, React Testing Library
- **Integration Testing**: Playwright
- **Visual Regression**: Percy or Chromatic
- **Accessibility Testing**: axe, Lighthouse
- **E2E Testing**: Playwright
- **Performance Testing**: Lighthouse, WebPageTest

## Testing CI/CD

### CI/CD Testing Strategy
- **Pre-Commit**: Run unit tests on pre-commit
- **Pre-Push**: Run unit and integration tests on pre-push
- **Pull Request**: Run all tests on pull request
- **Pre-Deployment**: Run all tests before deployment
- **Post-Deployment**: Run smoke tests after deployment

### CI/CD Testing Implementation
```yaml
# .github/workflows/test.yml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run test:unit
      - run: npm run test:integration
      - run: npm run test:e2e
      - run: npm run test:lighthouse
```

### CI/CD Testing Requirements
- **Pre-Commit**: Unit tests on pre-commit
- **Pre-Push**: Unit and integration tests on pre-push
- **Pull Request**: All tests on pull request
- **Pre-Deployment**: All tests before deployment
- **Post-Deployment**: Smoke tests after deployment

## Testing Documentation

### Test Documentation Requirements
- **Test Plans**: Document test plans for each feature
- **Test Cases**: Document test cases for each feature
- **Test Results**: Document test results
- **Bug Reports**: Document bugs and issues
- **Test Coverage**: Document test coverage

### Test Documentation Strategy
- **Test Plans**: Create test plans before development
- **Test Cases**: Create test cases during development
- **Test Results**: Document test results after testing
- **Bug Reports**: Document bugs in issue tracker
- **Test Coverage**: Track test coverage metrics

## Testing Best Practices

### Do's
- Test behavior, not implementation
- Test user journeys, not components
- Test early and often
- Automate what can be automated
- Document test results

### Don'ts
- Don't test implementation details
- Don't skip testing
- Don't ignore test failures
- Don't rely solely on manual testing
- Don't forget to test edge cases
