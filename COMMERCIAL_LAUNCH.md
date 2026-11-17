# JAKS ENGINEERING LAB — Commercial Launch Operating Guide

Updated: 2026-11-17

## Positioning
JAKS is an engineering-led development studio offering product design, mechanical and electronic prototyping, automation and functional systems. 3D printing is one fabrication method, **not the core product**.

## Website implementation
- New homepage copy and three-step product philosophy.
- **TapLink Dock** and **QuickShot Mount** are clearly marked research concepts, not products available for payment.
- Catalog copy now distinguishes past quote-based items from validated commercial sales.
- Contact product selector allows non-binding product research interest.
- Analytics framework is installed in code, **disabled pending GA4 registration and consent**.
- Privacy page at `/privacy/` and a footer link to it.
- Founder personal Instagram link is hidden until the brand account can be verified.

## Account setup (owner action required)
1. **Email:** The existing Gmail account `jaks2520@gmail.com` is verified and should remain operational. Gmail labels created: `JAKS | Leads`, `JAKS | Orders`, `JAKS | Partners`. A new business mailbox needs separate account/domain verification; do not publish an unverified mailbox. A prospective domain-based email could be `hello@jaksengineeringlab.com` if the domain is purchased and configured.
2. **Instagram:** Candidate handle `@jaksengineeringlab` (availability **not checked/confirmed**). Register in the Instagram app, verify ownership by email/phone, enable two-factor authentication, switch to a professional Business account, and use brand image and link to the site. Do not insert the social link before the profile is live.
3. **Metricool:** Connected to ChatGPT, but no social network has been linked. Connect a verified Instagram Business account at https://app.metricool.com/brands/connections?blogId=8179317 before scheduling.
4. **Etsy:** Open and verify seller account at https://www.etsy.com/sell. Do not add checkout links until a tested eligible original product has been listed. Keep engineering consulting quoted on our site.

## Analytics setup
1. Create Google Analytics property and web data stream for `https://jakslab.github.io/jaksLab/`.
2. Get measurement ID, then edit root `analytics.js`: `const measurementId='G-XXXXXXXX';`. The code intentionally rejects blank or invalid IDs.
3. Publish and verify that no GA4 request occurs before consent; consent, then confirm a page view in Realtime.
4. Register `inquiry_draft_prepared` as an intent signal, **not a completed submission**, and measure `jaks_link_click` for email/WhatsApp/phone/pilot interest.
5. Verify the site in https://search.google.com/search-console and submit `/sitemap.xml`.
6. Track **actual messages received** and **paid orders** separately in the business dashboard—neither is measurable from links alone.

## 30/60/90 action plan
- Days 1–30: set up social/shop/analytics, talk to at least 10 prospective buyers and prototype a small product.
- Days 31–60: publish real prototype photos, validate costs and suitability, create one Etsy listing only for a ready product.
- Days 61–90: review product demand, conversion and margin per labor-hour; improve or retire weak offers.

## Content system
Shoot 5–7 vertical clips of 3–8 seconds: problem, CAD, components, assembly, test, finished product. Use 1080p / 30 fps and archive raw footage off the phone. Start with two Reels per week, repurpose for TikTok and LinkedIn.
Do not publish workplace footage, machinery, technical drawings or employer confidential details without specific permission.

## Instagram brand kit
Display name: JAKS Engineering Lab
Suggested handle: @jaksengineeringlab
Bio:
Engineering • Design • Build
Functional products | Automation | Robotics
Ideas engineered into real solutions.
NY / NJ • Custom projects

## Limitations
This is a **static website**, not yet a CRM, payment platform, or email automation system. The quote form opens a draft that visitors must send themselves. Do not claim metrics, accounts, customer numbers, or revenue that do not exist.
