# Next.js Rendering Modes Demo (SSG · SSR · ISR)

## Overview
This project demonstrates **Static (SSG)**, **Dynamic (SSR)**, and **Hybrid (ISR)** rendering using the **Next.js App Router**, focusing on performance, scalability, and data freshness.

---

## Pages & Rendering Strategy

### `/about` — Static Rendering (SSG)
- `export const revalidate = false`
- Generated at build time
- Fastest and most scalable
- Used for content that rarely changes

### `/dashboard` — Dynamic Rendering (SSR)
- `export const dynamic = "force-dynamic"`
- Rendered on every request
- Always fresh data
- Used for dashboards and user-specific pages

### `/news` — Hybrid Rendering (ISR)
- `export const revalidate = 60`
- Static page revalidated every 60 seconds
- Balances speed and freshness
- Ideal for news feeds and listings

---

## Case Study: DailyEdge News Portal
Using only SSG caused outdated breaking news, while using SSR everywhere increased cost and slowed performance.

**Balanced solution:**
- News feed → ISR  
- Dashboards & breaking updates → SSR  
- Static pages → SSG  

This balances **speed, freshness, and scalability**.

---

## Scalability Reflection
With 10× more users, SSR everywhere would be expensive.  
Using **SSG and ISR wherever possible** reduces server load and improves performance, while SSR is reserved for real-time data.

---

## Conclusion
Choosing the right rendering strategy per page leads to faster load times, better scalability, and lower infrastructure costs in real-world Next.js applications.

---

## Environment-Aware Builds & Secrets Management (Concept-2)

### Environment Segregation
This project uses separate environment configuration files for different stages of deployment:
- `.env.development`
- `.env.staging`
- `.env.production`

Each environment points to different API endpoints and configuration values, ensuring that development or staging settings never affect production.

### Secure Secret Management
Real secrets such as database credentials and API keys are never committed to the repository.  
Only `.env.example` is tracked, while actual values are injected securely using tools like **GitHub Secrets** in real production deployments.

### Case Study: ShopLite Incident
In the ShopLite case study, staging database credentials were mistakenly used in production, overwriting live data.  
This project prevents such issues by enforcing strict environment separation and secure secret handling.

### CI/CD Reliability
Environment-aware builds improve CI/CD reliability by enabling safe testing in staging environments before production deployment, reducing downtime and deployment risks.