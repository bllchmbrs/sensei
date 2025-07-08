# Pricing Update Plan - PRD

## Executive Summary
We need to update and consolidate the pricing structure across the Astro Launch UI template. Currently, there are multiple inconsistent pricing models throughout the application that need to be unified and updated.

## Current State Analysis

### 1. Presentation Pricing Component (`/web/src/components/presentation/pricing.tsx`)
- **Open Source Plan**: Free
  - 20 Components
  - 10 Blocks  
  - 3 Example Pages
- **Pro Version**: $99
  - 140+ Components
  - 30+ Blocks
  - 10+ Example Pages
- **Payment Integration**: Paddle (Vendor: 102023, Product: 847482)

### 2. About Pricing Component (`/web/src/components/about/pricing.tsx`)
- **Space Individual**: No price shown
- **Team**: $39
- **Growth**: $79
- **Enterprise**: $99

### 3. Product Store Data (`/web/public/data.json`)
- Basic Starter Pack: $399
- Apple Watch: $199
- iMac: $1399
- iPhone: $1599.99
- iWatch: $599

## Key Issues Identified

1. **Inconsistent Pricing Models**: Multiple different pricing structures exist
2. **Conflicting Enterprise Price**: $99 in both presentation and about components
3. **Mixed Product Types**: UI template pricing mixed with physical product pricing
4. **Payment Integration**: Only presentation component has Paddle integration
5. **Missing Price Display**: Space Individual plan has no price shown

## Proposed Solution

### Phase 1: Pricing Structure Consolidation (Week 1)

#### 1.1 Define Primary Business Model
**Recommendation**: Focus on UI Template/Component Library pricing
- Retire physical product pricing in data.json
- Standardize on Software-as-a-Service model

#### 1.2 New Unified Pricing Structure
```
- **Starter**: $0 (Free)
  - 20 Components
  - 10 Blocks
  - 3 Example Pages
  - Community Support

- **Professional**: $49/month or $399/year
  - 140+ Components
  - 50+ Blocks
  - 20+ Example Pages
  - Email Support
  - Commercial License

- **Team**: $99/month or $799/year (per 5 users)
  - Everything in Professional
  - Team Collaboration Features
  - Priority Support
  - Advanced Templates

- **Enterprise**: $299/month or $2399/year
  - Everything in Team
  - Unlimited Users
  - White-label License
  - Custom Components
  - Dedicated Support
```

### Phase 2: Implementation Tasks (Week 2)

#### 2.1 Update Presentation Pricing Component
- [ ] Update pricing tiers and descriptions
- [ ] Add monthly/yearly toggle
- [ ] Update Paddle product IDs for new pricing
- [ ] Add feature comparison matrix

#### 2.2 Update About Pricing Component  
- [ ] Align with new pricing structure
- [ ] Add missing features descriptions
- [ ] Implement consistent styling
- [ ] Add pricing period toggle

#### 2.3 Data Cleanup
- [ ] Remove physical product pricing from data.json
- [ ] Create separate pricing config file
- [ ] Update product catalog for digital products only

#### 2.4 Payment Integration Updates
- [ ] Update Paddle vendor settings
- [ ] Create new product SKUs in Paddle
- [ ] Implement subscription management
- [ ] Add payment success/failure handling

### Phase 3: Testing & Validation (Week 3)

#### 3.1 Testing Checklist
- [ ] Pricing display consistency across all pages
- [ ] Payment flow end-to-end testing
- [ ] Mobile responsiveness
- [ ] Accessibility compliance
- [ ] Cross-browser compatibility

#### 3.2 A/B Testing Setup
- [ ] Implement price testing framework
- [ ] Track conversion metrics
- [ ] Monitor customer feedback
- [ ] Analyze competitor pricing

### Phase 4: Launch & Monitoring (Week 4)

#### 4.1 Deployment Plan
- [ ] Backup current pricing configuration
- [ ] Deploy to staging environment
- [ ] User acceptance testing
- [ ] Production deployment
- [ ] Monitor for issues

#### 4.2 Post-Launch Activities
- [ ] Monitor conversion rates
- [ ] Collect customer feedback
- [ ] Track support ticket volume
- [ ] Analyze revenue impact

## Technical Implementation Details

### Files to Update:
1. `/web/src/components/presentation/pricing.tsx`
2. `/web/src/components/about/pricing.tsx`
3. `/web/public/data.json`
4. `/web/types/index.d.ts` (Paddle types)

### New Files to Create:
1. `/web/src/config/pricing.ts` - Centralized pricing configuration
2. `/web/src/components/shared/PricingToggle.tsx` - Monthly/yearly toggle
3. `/web/src/utils/paddle.ts` - Payment utilities

### Dependencies to Review:
- Paddle.js integration
- Material Tailwind pricing components
- Framer Motion for animations

## Success Metrics

### Primary KPIs:
- Conversion rate improvement: Target +15%
- Average revenue per user (ARPU): Target +25%
- Customer satisfaction: Target >4.5/5

### Secondary KPIs:
- Page load performance: <2s
- Mobile conversion parity: 90% of desktop
- Support ticket reduction: -20%

## Risk Assessment

### High Risk:
- Payment integration failures
- Customer confusion during transition
- Revenue loss during migration

### Mitigation Strategies:
- Comprehensive testing before launch
- Clear communication to existing customers
- Rollback plan prepared
- Customer support team briefed

## Timeline Summary

| Week | Phase | Key Deliverables |
|------|-------|------------------|
| 1 | Planning & Design | Finalized pricing structure, design mockups |
| 2 | Implementation | Updated components, payment integration |
| 3 | Testing | QA testing, A/B test setup |
| 4 | Launch | Production deployment, monitoring |

## Budget Estimate

- Development effort: 40-60 hours
- Paddle transaction fees: 5% + $0.50 per transaction
- Testing tools: $200/month
- Total estimated cost: $8,000-12,000

## Next Steps

1. **Immediate (Today)**: Stakeholder review and approval
2. **This Week**: Begin Phase 1 implementation
3. **Next Week**: Complete component updates
4. **Week 3**: Testing and validation
5. **Week 4**: Launch and monitoring

## Questions for Stakeholder Review

1. Should we maintain backward compatibility for existing customers?
2. What's the preferred payment processing provider (Paddle vs alternatives)?
3. Do we need to support multiple currencies?
4. Should we implement a free trial period?
5. What's the go-live target date?

---

**Document Version**: 1.0  
**Last Updated**: Today  
**Next Review**: Weekly during implementation