# Pricing Update Analysis - Following Create-Tasks Planning Process

## Current Pricing Implementation Overview

Based on the planning process in `planning/prd-create-tasks.mdc`, here's what needs to change to update pricing in the Sensei project:

## Current Pricing Structure

### 1. Frontend Pricing Components

#### Main Pricing Section (`web/src/components/presentation/pricing.tsx`)
- **Open Source Plan**: Free
- **Pro Version**: $99 (Paddle Product ID: 847482)
- Uses Paddle payment integration (Vendor: 102023)

#### Alternative Pricing Table (`web/src/components/about/pricing.tsx`)
- **Space Individual**: Free
- **Team**: $39
- **Growth**: $79 
- **Enterprise**: $99

### 2. E-commerce Product Pricing (`web/public/data.json`)
- Basic Starter Pack: $399
- Apple Watch: $199
- iMac: $1399
- iPhone: $1599.99
- iWatch: $599

### 3. Payment Integration
- **Paddle Payment System**: Integrated in pricing component
- **Product ID**: 847482 for Pro Version
- **Vendor ID**: 102023

## What Needs to Change for Pricing Updates

### Following the Create-Tasks Planning Process:

### Phase 1: Identify Components Requiring Changes

#### Core Files That Need Modification:
1. **`web/src/components/presentation/pricing.tsx`**
   - Update pricing tiers and amounts
   - Modify Paddle product IDs if needed
   - Update plan features/descriptions

2. **`web/src/components/about/pricing.tsx`** 
   - Update pricing table values
   - Modify plan descriptions and features
   - Update comparison matrix

3. **`web/public/data.json`**
   - Update e-commerce product prices
   - Modify product pricing data structure

4. **Payment Integration**
   - Update Paddle product IDs for new pricing
   - Configure new payment products in Paddle dashboard
   - Test payment flow with new prices

### Phase 2: Dependencies and Related Changes

#### Additional Files That May Need Updates:
1. **Pages using pricing components**:
   - `web/src/pages/index.astro`
   - `web/src/pagesFree/index.astro`

2. **Navigation and links**:
   - `web/src/components/presentation/header.tsx` (pricing anchor)
   - `web/src/components/presentation/footer.tsx` (pricing links)
   - `web/src/components/presentation/footerFree.tsx`

3. **Type definitions**:
   - `web/types/index.d.ts` (Paddle types)

### Phase 3: Planning Process Requirements

#### Before Making Changes - Create PRD (Following `prd-create-plan.mdc`):
1. **Ask Clarifying Questions**:
   - What are the new pricing tiers?
   - Which plans are changing?
   - Are new features being added/removed?
   - What's the target launch date?
   - Should grandfathering be considered?

2. **Create PRD** (`tasks/prd-pricing-update.md`):
   - Problem statement
   - Goals and objectives
   - User stories
   - Functional requirements
   - Technical considerations
   - Success metrics

#### After PRD - Create Tasks (Following `prd-create-tasks.mdc`):
1. **Generate Parent Tasks** (Phase 1)
2. **Wait for "Go" confirmation** 
3. **Generate Sub-Tasks** (Phase 2)
4. **Save to** `tasks/tasks-prd-pricing-update.md`

## Critical Considerations

### 1. Payment Integration Changes
- **Paddle Product Setup**: New products must be created in Paddle dashboard
- **Product ID Mapping**: Update hardcoded product IDs in components
- **Testing**: Verify payment flow works with new pricing

### 2. User Experience Impact
- **Existing Customers**: Consider grandfathering or migration strategy
- **Marketing Pages**: Ensure consistency across all pricing displays
- **Mobile Responsiveness**: Test pricing tables on all devices

### 3. Technical Dependencies
- **Environment Variables**: May need Paddle configuration updates
- **Build Process**: Ensure no hardcoded pricing in build configs
- **Analytics**: Update tracking for new pricing tiers

## Next Steps to Follow Planning Process

1. **Create PRD First**: Use `planning/prd-create-plan.mdc` process
2. **Ask clarifying questions** about:
   - Specific new pricing amounts
   - Feature changes per tier
   - Timeline and rollout strategy
   - Payment provider changes

3. **Create Detailed Tasks**: Use `planning/prd-create-tasks.mdc` process
   - Generate parent tasks
   - Wait for confirmation
   - Break down into sub-tasks
   - Identify all relevant files

4. **Implementation Order**:
   - Backend/payment setup first
   - Frontend pricing components
   - Testing and validation
   - Deployment and monitoring

## Files for Reference

- Planning Process: `planning/prd-create-tasks.mdc`
- PRD Creation: `planning/prd-create-plan.mdc`
- Current Pricing: `web/src/components/presentation/pricing.tsx`
- Alternative Pricing: `web/src/components/about/pricing.tsx`
- Product Data: `web/public/data.json`

This analysis provides the foundation for following the established planning process to properly implement pricing updates.