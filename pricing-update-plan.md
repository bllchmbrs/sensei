# Pricing Update Plan - Product Requirements Document (PRD)

## Executive Summary

This document outlines the plan for updating the pricing structure across the Sensei platform. The current system has two distinct pricing models: product pricing for e-commerce items and service pricing for subscription plans.

## Current State Analysis

### 1. Product Pricing (E-commerce)
**Location**: `web/public/data.json`

| Product | Current Price |
|---------|---------------|
| Basic Starter Pack | $399 |
| Apple Watch | $199 |
| iMac | $1,399 |
| iPhone | $1,599.99 |
| iWatch | $599 |

### 2. Service Plan Pricing
**Locations**: 
- `web/src/components/presentation/pricing.tsx`
- `web/src/components/about/pricing.tsx`

#### Presentation Pricing (Main Landing)
| Plan | Current Price |
|------|---------------|
| Open Source | Free |
| Pro Version | $99 |

#### About Page Pricing (Detailed Plans)
| Plan | Current Price |
|------|---------------|
| Space Individual | Not specified |
| Team | $39 |
| Growth | $79 |
| Enterprise | $99 |

## Pricing Architecture

### Current Implementation Structure

1. **Product Data Storage**
   - Products stored in JSON format in `web/public/data.json`
   - Each product has a `price` field
   - Static pricing without currency handling beyond USD

2. **Service Plan Components**
   - Two separate pricing components with different structures
   - Hardcoded pricing values in TSX files
   - Inconsistent pricing between presentation and about pages

3. **Payment Integration**
   - Paddle payment system integration for Pro Version ($99)
   - Product ID: 847482 for Pro Version checkout

## Proposed Changes

### Phase 1: Immediate Updates (Week 1)

#### 1.1 Product Pricing Updates
**Files to modify**: `web/public/data.json`

**Recommended New Pricing**:
- Basic Starter Pack: $299 (↓ $100)
- Apple Watch: $249 (↑ $50)
- iMac: $1,499 (↑ $100)
- iPhone: $1,399 (↓ $200.99)
- iWatch: $449 (↓ $150)

#### 1.2 Service Plan Pricing Harmonization
**Files to modify**:
- `web/src/components/presentation/pricing.tsx`
- `web/src/components/about/pricing.tsx`

**Standardized Service Pricing**:
- Free Tier: $0
- Starter: $29/month
- Professional: $79/month  
- Enterprise: $149/month

### Phase 2: Infrastructure Improvements (Week 2-3)

#### 2.1 Centralized Pricing Configuration
**New files to create**:
- `web/src/config/pricing.ts` - Central pricing configuration
- `web/src/types/pricing.ts` - TypeScript interfaces for pricing

#### 2.2 Dynamic Pricing System
- Extract hardcoded prices into configuration
- Support for different currencies
- A/B testing capability for pricing experiments

#### 2.3 Pricing Component Refactoring
- Create reusable pricing card components
- Implement consistent styling across all pricing sections
- Add promotional pricing support

### Phase 3: Advanced Features (Week 4)

#### 3.1 Multi-Currency Support
- Integration with currency conversion API
- Localized pricing display
- Currency selection component

#### 3.2 Pricing Analytics
- Track pricing page performance
- Conversion funnel analysis
- Price sensitivity testing framework

## Implementation Steps

### Step 1: Update Product Pricing
1. Modify `web/public/data.json` with new product prices
2. Test product display pages
3. Verify shopping cart calculations

### Step 2: Harmonize Service Pricing
1. Update `web/src/components/presentation/pricing.tsx`
2. Update `web/src/components/about/pricing.tsx`
3. Ensure consistent pricing across both components
4. Update Paddle product IDs if necessary

### Step 3: Create Pricing Configuration
1. Create centralized pricing configuration
2. Refactor components to use configuration
3. Add TypeScript interfaces for type safety

### Step 4: Testing & Validation
1. Cross-browser testing of pricing displays
2. Mobile responsiveness verification
3. Payment flow testing with new prices
4. Accessibility compliance check

## Technical Considerations

### 1. Data Structure Changes
```typescript
interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period?: 'month' | 'year' | 'one-time';
  features: string[];
  popular?: boolean;
  paddleProductId?: string;
}
```

### 2. Breaking Changes
- No breaking changes expected for Phase 1
- Phase 2 will require component refactoring
- Database schema updates may be needed for advanced features

### 3. Payment System Updates
- Update Paddle product configurations
- Test payment flows with new pricing
- Verify webhook handling for updated prices

## Risk Assessment

### High Risk
- Payment system integration failures
- Inconsistent pricing display across pages
- Customer confusion during transition

### Medium Risk
- Currency conversion accuracy
- Mobile display issues
- Performance impact of dynamic pricing

### Low Risk
- Minor styling inconsistencies
- SEO impact from pricing changes

## Success Metrics

### Business Metrics
- Conversion rate improvements
- Average revenue per user (ARPU)
- Customer acquisition cost (CAC)
- Pricing page engagement time

### Technical Metrics
- Page load performance
- Component reusability
- Code maintainability
- Test coverage

## Timeline

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Phase 1 | 1 week | Updated pricing across all components |
| Phase 2 | 2 weeks | Centralized configuration, refactored components |
| Phase 3 | 1 week | Multi-currency, analytics implementation |

## Rollback Plan

1. **Immediate Rollback**: Revert JSON and TSX file changes
2. **Database Rollback**: Restore previous pricing configuration
3. **Payment System**: Reactivate previous Paddle products
4. **Monitoring**: Track conversion rates for 48 hours post-deployment

## Approval Requirements

- [ ] Product Manager approval for new pricing strategy
- [ ] Finance team approval for pricing changes
- [ ] Engineering team approval for technical implementation
- [ ] QA approval for testing completion
- [ ] Legal approval for pricing terms compliance

## Next Steps

1. Schedule stakeholder review meeting
2. Finalize pricing strategy with business team
3. Begin Phase 1 implementation
4. Set up monitoring and analytics
5. Plan customer communication strategy

---

**Document Version**: 1.0  
**Last Updated**: Today  
**Owner**: Development Team  
**Reviewers**: Product, Finance, Legal