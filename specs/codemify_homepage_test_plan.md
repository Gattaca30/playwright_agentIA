# Codemify Homepage Test Plan

## Application Overview

Codemify (https://codemify.com) is an online QA engineering course platform offering Manual QA and Automation QA courses. The homepage serves as the primary landing page showcasing the company's offerings, student success stories, course information, pricing options, and various call-to-action elements to drive course enrollments. The platform emphasizes real-world practice, industry expert instruction, internship opportunities, and comprehensive interview preparation.

## Test Scenarios

### 1. Header Navigation and Mobile Menu

**Seed:** `tests/seed.spec.ts`

#### 1.1. Navigation menu displays all expected menu items

**File:** `tests/header/navigation-menu.spec.ts`

**Steps:**
  1. Navigate to the Codemify homepage
    - expect: The page loads successfully with the header visible
    - expect: All navigation menu items are displayed: About us, QA Courses, Call Experts, AI Courses, Offers, Reviews, Try intro week
  2. Verify the logo link in the header
    - expect: The Codemify logo is visible in the header

#### 1.2. Navigation links navigate to correct pages

**File:** `tests/header/navigation-links.spec.ts`

**Steps:**
  1. Click on 'About us' link
    - expect: The page navigates to the About Us page (URL contains /about-us)
  2. Navigate back to homepage and click 'Call Experts' link
    - expect: The page navigates to the Call Experts page (URL contains /meeting_expert)
  3. Navigate back to homepage and click 'Reviews' link
    - expect: The page navigates to the testimonials page (URL contains /testimonials)

#### 1.3. QA Courses dropdown/submenu appears when clicked

**File:** `tests/header/qa-courses-submenu.spec.ts`

**Steps:**
  1. Click on 'QA Courses' link in the header
    - expect: A submenu or navigation to QA Courses section appears
    - expect: The URL changes to include #submenu:QAcourses

#### 1.4. AI Courses submenu appears when clicked

**File:** `tests/header/ai-courses-submenu.spec.ts`

**Steps:**
  1. Click on 'AI Courses' link in the header
    - expect: A submenu or navigation to AI Courses section appears
    - expect: The URL changes to include #submenu:MLcourses

#### 1.5. Offers submenu appears when clicked

**File:** `tests/header/offers-submenu.spec.ts`

**Steps:**
  1. Click on 'Offers' link in the header
    - expect: A submenu or navigation to Offers section appears
    - expect: The URL changes to include #submenu:offers

#### 1.6. Try intro week link navigates correctly

**File:** `tests/header/intro-week-link.spec.ts`

**Steps:**
  1. Click on 'Try intro week' link in the header
    - expect: The page navigates to the Intro Week page (URL contains /intro-week)

#### 1.7. Mobile menu toggle opens and closes

**File:** `tests/header/mobile-menu-toggle.spec.ts`

**Steps:**
  1. Resize the browser to mobile view (or locate the mobile menu toggle button)
    - expect: The mobile menu toggle button becomes visible on smaller screens
  2. Click on the mobile menu toggle button
    - expect: The mobile menu opens and displays all navigation items
    - expect: A 'Close menu' button appears
  3. Click on 'Close menu' button
    - expect: The mobile menu closes
    - expect: The mobile menu toggle button remains visible

#### 1.8. Skip to main content link works

**File:** `tests/header/skip-to-main-content.spec.ts`

**Steps:**
  1. Press Tab to focus on the skip link, then press Enter
    - expect: The page scrolls to the main content area (element with id 't-main-content')

### 2. Hero Section and Call-to-Action Elements

**Seed:** `tests/seed.spec.ts`

#### 2.1. Hero section displays correct content

**File:** `tests/hero/hero-content.spec.ts`

**Steps:**
  1. Observe the hero section at the top of the page
    - expect: The hero section displays the heading 'START A NEW CAREER IN TECH'
    - expect: The description text is visible explaining the course benefits
    - expect: A hero image is displayed

#### 2.2. Start Here button in hero section navigates to correct section

**File:** `tests/hero/start-here-button.spec.ts`

**Steps:**
  1. Scroll to the hero section and click the 'Start Here' button
    - expect: The page scrolls to or navigates to the #start section
    - expect: The URL updates to include #start

#### 2.3. Secure your spot CTA button links to checkout

**File:** `tests/hero/secure-spot-button.spec.ts`

**Steps:**
  1. Find and click the 'Secure your spot' button in the promotional offer section
    - expect: The button links to the checkout page (https://courses.codemify.com/offers/2oZhogLF/checkout)
    - expect: A new tab/page opens or user is taken to the checkout page

#### 2.4. Promotional offer section displays correct information

**File:** `tests/hero/promotional-offer.spec.ts`

**Steps:**
  1. Locate the promotional offer section with the new group start date
    - expect: The section displays 'New group starts January 31st'
    - expect: The 'Secure your spot' button with discount messaging is visible

### 3. Courses Section

**Seed:** `tests/seed.spec.ts`

#### 3.1. Courses section displays both course cards

**File:** `tests/courses/courses-display.spec.ts`

**Steps:**
  1. Scroll to the 'Our courses' section
    - expect: The section heading 'Our courses' is visible
    - expect: Manual QA course card is displayed with title, description, and 'Learn more' button
    - expect: Automation QA course card is displayed with title, description, and 'Learn more' button

#### 3.2. Manual QA course card displays correct information

**File:** `tests/courses/manual-qa-course.spec.ts`

**Steps:**
  1. Locate the Manual QA course card
    - expect: Course title 'Manual QA' is displayed
    - expect: Course description mentions testing websites visually
    - expect: Duration shows '2 months'
    - expect: Live webinars shows '3 times a week'
    - expect: Interview Prep shows '50 rounds'
    - expect: 'Learn more' button is present

#### 3.3. Automation QA course card displays correct information

**File:** `tests/courses/automation-qa-course.spec.ts`

**Steps:**
  1. Locate the Automation QA course card
    - expect: Course title 'Automation QA' is displayed
    - expect: Course description mentions writing code and using tools
    - expect: Duration shows '3.5 months'
    - expect: Live webinars shows '3 times a week'
    - expect: Interview Prep shows '86 rounds'
    - expect: 'Learn more' button is present

#### 3.4. Course 'Learn more' buttons navigate to course details

**File:** `tests/courses/learn-more-buttons.spec.ts`

**Steps:**
  1. Click the 'Learn more' button on the Manual QA course card
    - expect: The page navigates to course details or a modal/section opens showing more information
  2. Navigate back and click the 'Learn more' button on the Automation QA course card
    - expect: The page navigates to automation course details or a modal/section opens

### 4. Why We're The Best Section

**Seed:** `tests/seed.spec.ts`

#### 4.1. Why we're the best section displays all differentiators

**File:** `tests/differentiators/why-best-section.spec.ts`

**Steps:**
  1. Scroll to the 'Why are we the best in QA education?' section
    - expect: The section heading is visible
    - expect: All four differentiator cards are displayed: Internship in US-based startup, Interview preparation, 10+ years in industry, Expert YouTube channel

#### 4.2. Internship differentiator content is correct

**File:** `tests/differentiators/internship-differentiator.spec.ts`

**Steps:**
  1. Locate the Internship differentiator card
    - expect: Title 'Internship in the US Based startup' is displayed
    - expect: Description mentions partnerships with software development companies is displayed

#### 4.3. Interview preparation differentiator content is correct

**File:** `tests/differentiators/interview-prep-differentiator.spec.ts`

**Steps:**
  1. Locate the Interview preparation differentiator card
    - expect: Title 'Interview preparation' is displayed
    - expect: Description mentions 136 rounds of interview practice is displayed

#### 4.4. Industry experience differentiator content is correct

**File:** `tests/differentiators/industry-experience-differentiator.spec.ts`

**Steps:**
  1. Locate the Industry experience differentiator card
    - expect: Title '10+ years in the industry' is displayed
    - expect: Description mentions experienced QA experts is displayed

#### 4.5. YouTube channel differentiator content is correct

**File:** `tests/differentiators/youtube-differentiator.spec.ts`

**Steps:**
  1. Locate the YouTube channel differentiator card
    - expect: Title 'Expert YouTube channel' is displayed
    - expect: Description mentions 1 million views and 4 years is displayed

### 5. Career Journey Section and CTAs

**Seed:** `tests/seed.spec.ts`

#### 5.1. Try Free Lesson CTA button is accessible and functional

**File:** `tests/cta/try-free-lesson.spec.ts`

**Steps:**
  1. Locate the 'Try Free Lesson' button in the main section
    - expect: The 'Try Free Lesson' button is visible and clickable
  2. Click the 'Try Free Lesson' button
    - expect: The button triggers an action (opens a modal, navigates to page, or displays content)

#### 5.2. One-on-One consultation link navigates correctly

**File:** `tests/cta/one-on-one-consultation.spec.ts`

**Steps:**
  1. Locate the 'One-on-One consultation' link below the 'Try Free Lesson' button
    - expect: The link is visible and clickable
  2. Click the 'One-on-One consultation' link
    - expect: The link navigates to an external link (Calendly or consultation page)

#### 5.3. Free lesson step in career journey displays correct content

**File:** `tests/journey/first-free-lesson.spec.ts`

**Steps:**
  1. Locate the 'First Free Lesson' step in the career journey section
    - expect: Step title 'First Free Lesson' is displayed
    - expect: Description 'Watch this 7-minute video...' is displayed
    - expect: 'Try Free Lesson' button is visible

#### 5.4. Intro Week step displays correct content and button

**File:** `tests/journey/intro-week-step.spec.ts`

**Steps:**
  1. Locate the 'Intro Week – Hands-on Intensive' step in the career journey
    - expect: Step title 'Intro Week – Hands-on Intensive' is displayed
    - expect: Description mentions live webinars and practice is displayed
    - expect: 'Join Intro Week' button is visible
  2. Click the 'Join Intro Week' button
    - expect: The page navigates to /intro-week

#### 5.5. One-on-one call step displays correct content

**File:** `tests/journey/one-on-one-call-step.spec.ts`

**Steps:**
  1. Locate the 'One-on-one call' step in the career journey
    - expect: Step title 'One-on-one call' is displayed
    - expect: Description mentions booking a free 30-minute consultation with Sergii Khromchenko is displayed
    - expect: 'Book a call' button is visible
  2. Click the 'Book a call' button
    - expect: The page navigates to Calendly consultation booking page (https://calendly.com/codemify/consultation)

### 6. YouTube Channel and Social Proof

**Seed:** `tests/seed.spec.ts`

#### 6.1. YouTube channel section displays statistics correctly

**File:** `tests/social-proof/youtube-statistics.spec.ts`

**Steps:**
  1. Scroll to the 'Our YouTube Channel' section
    - expect: Section heading 'Our YouTube Channel' is visible
    - expect: Subheading 'Learn from the Experts' is displayed
    - expect: Statistics are shown: 250+ videos, 30k+ subscribers, 2+ mln views

#### 6.2. YouTube channel description is accurate

**File:** `tests/social-proof/youtube-description.spec.ts`

**Steps:**
  1. Review the YouTube channel description in the section
    - expect: Description mentions belief in sharing knowledge
    - expect: Content includes: Student success stories, Tutorials and materials, Tips on interviews and job opportunities

#### 6.3. YouTube Subscribe button navigates correctly

**File:** `tests/social-proof/youtube-subscribe.spec.ts`

**Steps:**
  1. Click the 'Subscribe' button in the YouTube channel section
    - expect: The link navigates to the Codemify YouTube channel (https://www.youtube.com/@Codemify)

### 7. Student Success Stories and Testimonials

**Seed:** `tests/seed.spec.ts`

#### 7.1. Student testimonials section displays heading and description

**File:** `tests/testimonials/testimonials-section.spec.ts`

**Steps:**
  1. Scroll to the 'Student Success Stories' section
    - expect: Section heading 'Student Success Stories' is visible
    - expect: Introductory text is displayed explaining the purpose

#### 7.2. Testimonial tabs/panels are navigable

**File:** `tests/testimonials/testimonial-tabs.spec.ts`

**Steps:**
  1. Scroll to the testimonial carousel/tabs section
    - expect: Multiple testimonial tabs or panels are visible
    - expect: Tab navigation controls/buttons are present
  2. Click on different testimonial tabs to navigate between them
    - expect: Each tab displays different student testimonials
    - expect: Testimonial content changes appropriately

#### 7.3. Individual testimonial contains correct information

**File:** `tests/testimonials/individual-testimonial.spec.ts`

**Steps:**
  1. View a testimonial by Georgii (QA Automation Engineer at Auditboard)
    - expect: Student name is displayed
    - expect: Current position and company are shown
    - expect: Testimonial quote is visible

#### 7.4. Testimonial videos embed correctly

**File:** `tests/testimonials/testimonial-videos.spec.ts`

**Steps:**
  1. Locate an embedded testimonial video in the testimonials section
    - expect: The video iframe is displayed
    - expect: Video appears playable
  2. Click on the video to play it
    - expect: The video begins playing or opens in a new context

### 8. Pricing, Payments and Guarantees

**Seed:** `tests/seed.spec.ts`

#### 8.1. Pricing section heading and guarantees are visible

**File:** `tests/pricing/pricing-section.spec.ts`

**Steps:**
  1. Scroll to the 'Pricing & Payment Plans' section
    - expect: Section heading 'Pricing & Payment Plans' is visible
    - expect: 100% Money-Back Guarantee is displayed with 3-day refund policy
    - expect: Flexible Payment Options is displayed

#### 8.2. Payment plan options display correctly

**File:** `tests/pricing/payment-plans.spec.ts`

**Steps:**
  1. View the payment plan options
    - expect: Lowest APR plan shows 5 payments option with monthly amount
    - expect: Learn now, pay later plan shows 24 payments option with monthly amount

#### 8.3. Pricing Learn More buttons navigate correctly

**File:** `tests/pricing/pricing-learn-more.spec.ts`

**Steps:**
  1. Click a 'Learn More' button next to pricing information
    - expect: The page navigates to the pricing/experts page (URL contains /experts)

#### 8.4. Reserve your spot button links to checkout

**File:** `tests/pricing/reserve-spot-button.spec.ts`

**Steps:**
  1. Locate the 'Reserve your spot' button in the pricing section
    - expect: The button is visible with text about $500 deposit and 5% discount
  2. Click the 'Reserve your spot' button
    - expect: The page navigates to checkout (https://courses.codemify.com/offers/2oZhogLF/checkout)

### 9. FAQ Section

**Seed:** `tests/seed.spec.ts`

#### 9.1. FAQ section displays all questions

**File:** `tests/faq/faq-questions.spec.ts`

**Steps:**
  1. Scroll to the FAQ section
    - expect: FAQ heading is visible
    - expect: All 8 FAQ questions are displayed as collapsible buttons: Do I need coding experience..., Do I need to learn math..., What if I don't like the course..., Does everyone find a job..., Are there enough jobs..., What is the difference between Manual and Automation..., Why should I choose QA Automation..., How much money do QA engineers earn..., Do you have a money back guarantee...

#### 9.2. FAQ question expands when clicked

**File:** `tests/faq/faq-expand.spec.ts`

**Steps:**
  1. Click on the first FAQ question 'Do I need coding experience or a special degree?'
    - expect: The question expands and displays the answer
    - expect: The answer is readable and properly formatted

#### 9.3. FAQ question collapses when clicked again

**File:** `tests/faq/faq-collapse.spec.ts`

**Steps:**
  1. Click on an expanded FAQ question again
    - expect: The question collapses and the answer is hidden

#### 9.4. Multiple FAQ questions can be expanded simultaneously

**File:** `tests/faq/faq-multiple-expand.spec.ts`

**Steps:**
  1. Click on the first FAQ question to expand it
    - expect: The first question expands and displays its answer
  2. Click on a second FAQ question to expand it
    - expect: The second question expands without closing the first question
    - expect: Both answers are visible

### 10. Google Reviews and Social Proof

**Seed:** `tests/seed.spec.ts`

#### 10.1. Google Reviews section displays rating and review count

**File:** `tests/social-proof/google-reviews.spec.ts`

**Steps:**
  1. Locate the Google Reviews section
    - expect: Rating is displayed as '4.9'
    - expect: Number of reviews shows '124 reviews'
    - expect: 'Reviews on Google' link is visible

#### 10.2. Reviews on Google link navigates correctly

**File:** `tests/social-proof/google-reviews-link.spec.ts`

**Steps:**
  1. Click the 'Reviews on Google' link
    - expect: The link navigates to the Google Search page for Codemify reviews

#### 10.3. Hiring companies section is visible

**File:** `tests/social-proof/hiring-companies.spec.ts`

**Steps:**
  1. Scroll to the 'Our students work at' section
    - expect: The section heading 'Our students work at' is displayed
    - expect: Company logos or names are displayed showing where graduates work

### 11. Footer and Contact Information

**Seed:** `tests/seed.spec.ts`

#### 11.1. Footer displays all key information

**File:** `tests/footer/footer-content.spec.ts`

**Steps:**
  1. Scroll to the footer section
    - expect: Codemify logo link is visible
    - expect: Social media links are displayed (LinkedIn, Instagram, YouTube, Facebook, TikTok)
    - expect: Contact email support@codemify.com is displayed
    - expect: Address is displayed: 7901 4th St N STE 300, St. Petersburg, FL 33702
    - expect: Copyright notice is displayed

#### 11.2. Footer navigation links are present

**File:** `tests/footer/footer-navigation.spec.ts`

**Steps:**
  1. Locate navigation links in the footer
    - expect: About us link is displayed
    - expect: Testimonials link is displayed
    - expect: FAQ link is displayed
    - expect: Pricing link is displayed
    - expect: Blog link is displayed
    - expect: Automation/SDET Training link is displayed
    - expect: Manual QA Training link is displayed
    - expect: Contact link is displayed

#### 11.3. Footer navigation links navigate correctly

**File:** `tests/footer/footer-links-navigation.spec.ts`

**Steps:**
  1. Click on 'About us' link in the footer
    - expect: The page navigates to /about-us
  2. Navigate back and click on 'FAQ' link in the footer
    - expect: The page navigates to /faq or scrolls to FAQ section
  3. Navigate back and click on 'Blog' link in the footer
    - expect: The page navigates to /blog

#### 11.4. Social media links navigate to correct platforms

**File:** `tests/footer/social-media-links.spec.ts`

**Steps:**
  1. Click on the LinkedIn social media link in the footer
    - expect: The link navigates to the Codemify LinkedIn profile (https://www.linkedin.com/company/codemify/)
  2. Navigate back and click on the YouTube social media link
    - expect: The link navigates to the Codemify YouTube channel

#### 11.5. Contact email link opens mail client or displays contact form

**File:** `tests/footer/contact-email.spec.ts`

**Steps:**
  1. Hover over or click the email address support@codemify.com
    - expect: The email link is clickable
    - expect: It opens the default mail client or shows a mailto link (mailto:support@codemify.com)

#### 11.6. Footer legal links navigate correctly

**File:** `tests/footer/legal-links.spec.ts`

**Steps:**
  1. Click on 'Terms of Use' link in the footer
    - expect: The page navigates to /termsofuse
  2. Navigate back and click on 'Privacy Policy' link
    - expect: The page navigates to /privacypolicy

### 12. External Links and Third-Party Integrations

**Seed:** `tests/seed.spec.ts`

#### 12.1. Checkout links navigate to course platform

**File:** `tests/external/checkout-links.spec.ts`

**Steps:**
  1. Identify all 'Secure your spot' or 'Get Started Now' buttons throughout the page
    - expect: Multiple CTA buttons are found linking to checkout
    - expect: All buttons contain the same checkout URL: https://courses.codemify.com/offers/2oZhogLF/checkout
  2. Click on one of the checkout buttons
    - expect: The link navigates to the external courses platform checkout page

#### 12.2. Calendly consultation link opens booking page

**File:** `tests/external/calendly-link.spec.ts`

**Steps:**
  1. Click on the 'Book a call' button in the career journey section
    - expect: The link navigates to https://calendly.com/codemify/consultation
    - expect: A new tab/window opens for booking

#### 12.3. One-on-One consultation link opens correct page

**File:** `tests/external/consultation-link.spec.ts`

**Steps:**
  1. Click on the 'One-on-One consultation' link
    - expect: The link navigates to https://link.codemify.com/homepage page

### 13. Content and Copy Accuracy

**Seed:** `tests/seed.spec.ts`

#### 13.1. What is QA section contains accurate information

**File:** `tests/content/what-is-qa.spec.ts`

**Steps:**
  1. Scroll to the 'What is QA?' section
    - expect: Section heading 'What is QA?' is displayed
    - expect: Definition explaining QA as testing apps and websites is displayed

#### 13.2. Key features/benefits section displays all four features

**File:** `tests/content/key-features.spec.ts`

**Steps:**
  1. Locate the features section below 'What is QA?'
    - expect: Feature 1: 'Learn in 2-5 months' with description is displayed
    - expect: Feature 2: 'No coding experience required' with description is displayed
    - expect: Feature 3: 'Average graduate salary $95K+' with description is displayed
    - expect: Feature 4: 'From Manual to Automation' with description is displayed

#### 13.3. Ready to Learn More section CTA is visible

**File:** `tests/content/ready-to-learn.spec.ts`

**Steps:**
  1. Scroll to find the 'Ready to Learn More?' section
    - expect: Section heading and description are displayed
    - expect: 'Explore the Courses Now' link is visible
    - expect: Link mentions early booking for next cohort
  2. Click on 'Explore the Courses Now' link
    - expect: The page navigates to /program

#### 13.4. Already decided section contains final CTA

**File:** `tests/content/already-decided.spec.ts`

**Steps:**
  1. Scroll to the bottom section before footer
    - expect: Section with heading 'Already decided?' is displayed
    - expect: 'Get Started Now' link is visible with information about $500 deposit and 5% discount
