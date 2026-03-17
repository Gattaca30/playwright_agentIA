# About Us Page Test Plan

## Application Overview

The About Us page on Codemify.com is a key landing page that introduces the company, team members, and founder. It features navigation elements, team member profiles with images, call-to-action buttons, a mission statement, and footer with multiple links. The page is responsive and includes both desktop and mobile navigation patterns. Primary users are prospective students exploring the company and team credentials.

## Test Scenarios

### 1. Page Load and Navigation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Page loads successfully with correct title and URL

**File:** `tests/about-us/page-load.spec.ts`

**Steps:**
  1. Navigate to the About Us page at https://codemify.com/about-us
    - expect: Page title should be 'About Us'
    - expect: URL should be https://codemify.com/about-us
    - expect: Main heading 'Codemify qa Bootcamp members' should be visible

#### 1.2. Skip to main content link works

**File:** `tests/about-us/accessibility.spec.ts`

**Steps:**
  1. Navigate to About Us page
    - expect: Skip to main content link is visible at the top
  2. Click on 'Skip to main content' link
    - expect: Page should focus on the main content area
    - expect: User should bypass header navigation

#### 1.3. Page displays all team member cards

**File:** `tests/about-us/page-load.spec.ts`

**Steps:**
  1. Load the About Us page
    - expect: Team member section displays with 4 cards visible
    - expect: Each card shows profile image, name, and title
    - expect: Team members shown are: Farrukh, Anna, Olex, and Bella

#### 1.4. Founder section displays correctly

**File:** `tests/about-us/page-load.spec.ts`

**Steps:**
  1. Scroll to view the founder section
    - expect: Founder section displays images and name 'Sergii Khromchenko'
    - expect: Title 'Founder & Course Creator' is visible
    - expect: Founder biography quote is displayed in full

### 2. Navigation Menu Links

**Seed:** `tests/seed.spec.ts`

#### 2.1. Header navigation links are present and correct

**File:** `tests/about-us/navigation.spec.ts`

**Steps:**
  1. View the header navigation on the About Us page
    - expect: All navigation links are visible: 'QA Courses', 'Call Experts', 'ML Courses', 'Offers', 'Reviews', 'Prices'
    - expect: 'About us' link is highlighted/active
    - expect: 'Try intro week' button is visible in header

#### 2.2. Click home logo returns to homepage

**File:** `tests/about-us/navigation.spec.ts`

**Steps:**
  1. Click on the Codemify logo in the header
    - expect: User is redirected to homepage https://codemify.com/
    - expect: Browser navigates successfully

#### 2.3. QA Courses link displays submenu

**File:** `tests/about-us/navigation.spec.ts`

**Steps:**
  1. Click on 'QA Courses' link in header
    - expect: QA Courses submenu is displayed or page navigates accordingly

#### 2.4. AI/ML Courses link functions correctly

**File:** `tests/about-us/navigation.spec.ts`

**Steps:**
  1. Click on 'ML Courses' link in header
    - expect: ML Courses submenu is displayed or page navigates accordingly

#### 2.5. Call Experts link navigates correctly

**File:** `tests/about-us/navigation.spec.ts`

**Steps:**
  1. Click on 'Call Experts' link in header
    - expect: User is redirected to /meeting_expert page
    - expect: Call Experts page loads successfully

#### 2.6. Reviews link navigates to testimonials

**File:** `tests/about-us/navigation.spec.ts`

**Steps:**
  1. Click on 'Reviews' link in header
    - expect: User is redirected to /testimonials page
    - expect: Testimonials page loads successfully

#### 2.7. Prices link navigates correctly

**File:** `tests/about-us/navigation.spec.ts`

**Steps:**
  1. Click on 'Prices' link in header
    - expect: User is redirected to /experts page
    - expect: Pricing page loads successfully

#### 2.8. Try intro week button works in header

**File:** `tests/about-us/navigation.spec.ts`

**Steps:**
  1. Click on 'Try intro week' button in header
    - expect: User is redirected to /intro-week page
    - expect: Intro week page loads successfully

### 3. Mobile Menu Functionality

**Seed:** `tests/seed.spec.ts`

#### 3.1. Mobile menu toggle opens and closes

**File:** `tests/about-us/mobile-menu.spec.ts`

**Steps:**
  1. Resize viewport to mobile size (375px width)
    - expect: Menu toggle button appears
    - expect: Mobile menu is closed by default
  2. Click on menu toggle button
    - expect: Mobile menu slides open
    - expect: Menu items are visible
    - expect: Close menu button appears
  3. Click close menu button
    - expect: Mobile menu slides closed
    - expect: Menu toggle button is visible again

#### 3.2. Mobile menu contains all navigation options

**File:** `tests/about-us/mobile-menu.spec.ts`

**Steps:**
  1. Open mobile menu
    - expect: Menu contains: About us, QA Courses, ML Courses, Call Experts, Offers, Reviews, Prices
    - expect: Try intro week link is present in mobile menu

#### 3.3. Mobile menu links navigate correctly

**File:** `tests/about-us/mobile-menu.spec.ts`

**Steps:**
  1. Open mobile menu and click on 'QA Courses'
    - expect: QA Courses submenu is displayed
    - expect: Mobile menu functionality remains intact

### 4. Call-to-Action Buttons

**Seed:** `tests/seed.spec.ts`

#### 4.1. ONE-ON-ONE CONSULTATION button links correctly

**File:** `tests/about-us/cta-buttons.spec.ts`

**Steps:**
  1. Locate and click on 'ONE-ON-ONE CONSULTATION' button
    - expect: Button redirects to https://link.codemify.com/aboutUs
    - expect: Button is clickable and styled correctly
    - expect: Link opens successfully

#### 4.2. TRY INTRO WEEK button links correctly

**File:** `tests/about-us/cta-buttons.spec.ts`

**Steps:**
  1. Locate and click on 'TRY INTRO WEEK!' button
    - expect: Button redirects to https://courses.codemify.com/one-week-web-20
    - expect: Button is clickable and styled correctly
    - expect: Link opens successfully

#### 4.3. CTA buttons are prominently visible

**File:** `tests/about-us/cta-buttons.spec.ts`

**Steps:**
  1. View the About Us page
    - expect: Both CTA buttons are visible on the page
    - expect: Buttons are properly styled and easily clickable
    - expect: Buttons stand out from surrounding content

### 5. Team Member Profiles

**Seed:** `tests/seed.spec.ts`

#### 5.1. Team member cards display all information

**File:** `tests/about-us/team-profiles.spec.ts`

**Steps:**
  1. View the team members section
    - expect: Farrukh card displays: name, title 'Mentor/QA Automation Lead', and profile photo
    - expect: Anna card displays: name, title 'Co-founder of Codemify', and profile photo
    - expect: Olex card displays: name, title 'Senior Software Developer in Test', and profile photo
    - expect: Bella card displays: name, title 'Customer Support', and profile photo

#### 5.2. Team member bios are readable and complete

**File:** `tests/about-us/team-profiles.spec.ts`

**Steps:**
  1. Read Anna's biography
    - expect: Bio begins with 'Meet Anna, the co-founder and the real boss of Codemify'
    - expect: Bio includes text about her role and leadership style
    - expect: Bio text renders correctly with expected emphasis
  2. Read Farrukh's biography
    - expect: Bio describes his transition from truck driver to QA Automation Lead
    - expect: Bio mentions his nickname 'good officer'
    - expect: Bio emphasizes his experience and empathy
  3. Read Olex's biography
    - expect: Bio mentions his background as an electrician
    - expect: Bio includes '10+yr of experience' reference
    - expect: Bio contains his nickname 'bad officer'
  4. Read Bella's biography
    - expect: Bio describes her friendly nature and support role
    - expect: Bio mentions she answers customer questions
    - expect: Bio text is complete and readable

#### 5.3. Team member profile images load

**File:** `tests/about-us/team-profiles.spec.ts`

**Steps:**
  1. View team members section
    - expect: All 4 team member photos load successfully
    - expect: Photos are visible and properly sized
    - expect: Photos appear in correct order: Farrukh, Anna, Olex, Bella

### 6. Founder Profile Section

**Seed:** `tests/seed.spec.ts`

#### 6.1. Founder section displays correct information

**File:** `tests/about-us/founder-profile.spec.ts`

**Steps:**
  1. Scroll to the founder section
    - expect: Founder name 'Sergii Khromchenko' is displayed
    - expect: Title 'Founder & Course Creator' is visible
    - expect: Founder profile image is displayed

#### 6.2. Founder biography quote is complete and accurate

**File:** `tests/about-us/founder-profile.spec.ts`

**Steps:**
  1. Read the founder's biography section
    - expect: Quote begins with 'I have been working as a QA Engineering Manager for over a decade'
    - expect: Biography mentions teaching thousands of students
    - expect: Biography states average graduate salary of $95k per year
    - expect: Biography explains the motivation for creating Codemify courses
    - expect: Text ends with 'With my expertise and your passion, we can make this change a reality'

### 7. Mission Statement Section

**Seed:** `tests/seed.spec.ts`

#### 7.1. Mission statement displays correctly

**File:** `tests/about-us/mission.spec.ts`

**Steps:**
  1. Scroll to the mission statement section
    - expect: Section displays 'The Codemify' heading in bold
    - expect: Mission statement is visible and complete
    - expect: Legal disclaimers and success story notes are present

#### 7.2. Mission text contains required messages

**File:** `tests/about-us/mission.spec.ts`

**Steps:**
  1. Read the full mission section
    - expect: Text mentions 'highest quality education and coaching programs'
    - expect: Text includes mention of 'beginners and experienced QA'
    - expect: Legal disclaimer about varying results is present
    - expect: Text about 'proven education systems, drive, and hard work' is included
    - expect: Call to action 'If you're equally ready to work, we're ready to help!' is displayed

### 8. Footer Navigation and Links

**Seed:** `tests/seed.spec.ts`

#### 8.1. Footer contact information is present

**File:** `tests/about-us/footer.spec.ts`

**Steps:**
  1. Scroll to footer
    - expect: Text 'We're happy to talk!' is visible
    - expect: Email label and support@codemify.com link are displayed
    - expect: Footer logo/link is visible

#### 8.2. Support email link works

**File:** `tests/about-us/footer.spec.ts`

**Steps:**
  1. Click on support@codemify.com link
    - expect: Link has correct href: mailto:support@codemify.com
    - expect: Email client action is triggered or link is valid

#### 8.3. Footer navigation links are present and functional

**File:** `tests/about-us/footer.spec.ts`

**Steps:**
  1. View footer navigation
    - expect: First column contains: 'Plans and Prices', 'Automation/SDET Training', 'Manual QA Training', 'Contact'
    - expect: Second column contains: 'About', 'Testimonials', 'FAQ', 'Blog'

#### 8.4. Plans and Prices link navigates correctly

**File:** `tests/about-us/footer.spec.ts`

**Steps:**
  1. Click on 'Plans and Prices' link in footer
    - expect: User is redirected to https://codemify.com/experts
    - expect: Pricing page loads successfully

#### 8.5. Automation training link navigates correctly

**File:** `tests/about-us/footer.spec.ts`

**Steps:**
  1. Click on 'Automation/SDET Training' link
    - expect: User is redirected to https://codemify.com/automation-qa-training
    - expect: Training page loads successfully

#### 8.6. Manual QA training link navigates correctly

**File:** `tests/about-us/footer.spec.ts`

**Steps:**
  1. Click on 'Manual QA Training' link
    - expect: User is redirected to https://codemify.com/manual-qa-course-with-real-practice
    - expect: Course page loads successfully

#### 8.7. Contact link in footer works

**File:** `tests/about-us/footer.spec.ts`

**Steps:**
  1. Click on 'Contact' link in footer
    - expect: User is redirected to https://codemify.com/contact
    - expect: Contact page loads successfully

#### 8.8. About link in footer works

**File:** `tests/about-us/footer.spec.ts`

**Steps:**
  1. Click on 'About' link in footer
    - expect: Link returns to current page (About Us)
    - expect: Page reloads successfully
    - expect: URL remains https://codemify.com/about-us

#### 8.9. Testimonials link in footer works

**File:** `tests/about-us/footer.spec.ts`

**Steps:**
  1. Click on 'Testimonials' link in footer
    - expect: User is redirected to https://codemify.com/testimonials
    - expect: Testimonials page loads successfully

#### 8.10. FAQ link in footer works

**File:** `tests/about-us/footer.spec.ts`

**Steps:**
  1. Click on 'FAQ' link in footer
    - expect: User is redirected to https://codemify.com/faq
    - expect: FAQ page loads successfully

#### 8.11. Blog link in footer works

**File:** `tests/about-us/footer.spec.ts`

**Steps:**
  1. Click on 'Blog' link in footer
    - expect: User is redirected to https://codemify.com/blog
    - expect: Blog page loads successfully

### 9. Social Media Links

**Seed:** `tests/seed.spec.ts`

#### 9.1. Social media links are present in footer

**File:** `tests/about-us/social-media.spec.ts`

**Steps:**
  1. View footer social media section
    - expect: All social media links are visible: Facebook, Instagram, YouTube, Telegram
    - expect: Links are styled appropriately as social icons or text

#### 9.2. Facebook link opens correct profile

**File:** `tests/about-us/social-media.spec.ts`

**Steps:**
  1. Click on Facebook link
    - expect: Link navigates to https://www.facebook.com/codemify
    - expect: External link opens successfully

#### 9.3. Instagram link opens correct profile

**File:** `tests/about-us/social-media.spec.ts`

**Steps:**
  1. Click on Instagram link
    - expect: Link navigates to https://www.instagram.com/codemify_/
    - expect: External link opens successfully

#### 9.4. YouTube link opens correct channel

**File:** `tests/about-us/social-media.spec.ts`

**Steps:**
  1. Click on YouTube link
    - expect: Link navigates to https://www.youtube.com/channel/UCT7YaGWYmKtcu53NkuB59PQ
    - expect: External link opens successfully

#### 9.5. Telegram link opens correct group

**File:** `tests/about-us/social-media.spec.ts`

**Steps:**
  1. Click on Telegram link
    - expect: Link navigates to https://t.me/codemifyschool
    - expect: External link opens successfully

### 10. Legal and Policy Links

**Seed:** `tests/seed.spec.ts`

#### 10.1. Privacy link works correctly

**File:** `tests/about-us/legal.spec.ts`

**Steps:**
  1. Scroll to page footer
    - expect: Privacy link is visible in footer
    - expect: Link displays 'Privacy'
  2. Click on Privacy link
    - expect: User is redirected to https://codemify.com/privacypolicy
    - expect: Privacy policy page loads successfully

#### 10.2. Terms link works correctly

**File:** `tests/about-us/legal.spec.ts`

**Steps:**
  1. Scroll to page footer
    - expect: Terms link is visible in footer
    - expect: Link displays 'Terms'
  2. Click on Terms link
    - expect: User is redirected to https://codemify.com/termsofuse
    - expect: Terms of use page loads successfully

#### 10.3. Copyright notice is displayed

**File:** `tests/about-us/legal.spec.ts`

**Steps:**
  1. View footer bottom
    - expect: Copyright notice is visible
    - expect: Text mentions '© All rights reserved. Codemify Inc.'

### 11. Page Responsiveness and Layout

**Seed:** `tests/seed.spec.ts`

#### 11.1. Page displays correctly on mobile viewport

**File:** `tests/about-us/responsive.spec.ts`

**Steps:**
  1. Resize viewport to 375px width (mobile)
    - expect: Page content is readable and properly arranged
    - expect: Team member cards stack vertically
    - expect: Navigation menu displays mobile toggle
    - expect: All text is legible without horizontal scrolling

#### 11.2. Page displays correctly on tablet viewport

**File:** `tests/about-us/responsive.spec.ts`

**Steps:**
  1. Resize viewport to 768px width (tablet)
    - expect: Page layout adjusts appropriately
    - expect: Team member cards may display in grid
    - expect: Navigation is accessible
    - expect: All content is visible

#### 11.3. Page displays correctly on desktop viewport

**File:** `tests/about-us/responsive.spec.ts`

**Steps:**
  1. Resize viewport to 1440px width (desktop)
    - expect: Full navigation bar is displayed
    - expect: Team member cards display in optimal grid
    - expect: All content is properly spaced
    - expect: CTA buttons are prominently placed

#### 11.4. Images scale appropriately on different viewports

**File:** `tests/about-us/responsive.spec.ts`

**Steps:**
  1. View page on mobile, tablet, and desktop viewports
    - expect: Team member photos display correctly on all screen sizes
    - expect: Founder photos display correctly on all screen sizes
    - expect: Images maintain aspect ratio and are not distorted

### 12. Content Validation and Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 12.1. Page title and meta information are correct

**File:** `tests/about-us/content-validation.spec.ts`

**Steps:**
  1. Load About Us page and inspect page metadata
    - expect: Page title is 'About Us'
    - expect: URL is https://codemify.com/about-us
    - expect: Page has proper meta tags for SEO

#### 12.2. All links have valid href attributes

**File:** `tests/about-us/content-validation.spec.ts`

**Steps:**
  1. Inspect all links on the page
    - expect: All links have href attributes
    - expect: Navigation links use relative URLs correctly
    - expect: External links use absolute URLs
    - expect: No links are broken or have placeholder values

#### 12.3. All images have alt text

**File:** `tests/about-us/content-validation.spec.ts`

**Steps:**
  1. Inspect all images on the page
    - expect: Team member images have descriptive alt text
    - expect: Founder images have descriptive alt text
    - expect: Logo image has alt text

#### 12.4. Text content does not have typos or formatting issues

**File:** `tests/about-us/content-validation.spec.ts`

**Steps:**
  1. Review all text content on page
    - expect: Team member names are spelled correctly
    - expect: Job titles are accurate
    - expect: Biography text is complete and grammatically correct
    - expect: Mission statement is complete

#### 12.5. Page handles rapid navigation away and back

**File:** `tests/about-us/content-validation.spec.ts`

**Steps:**
  1. Click on a navigation link to leave the page
    - expect: Navigation works smoothly
  2. Navigate back to About Us using browser back button
    - expect: Page loads successfully
    - expect: Content displays correctly
    - expect: Page state is preserved if applicable
