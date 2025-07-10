# Vibe Coding Prompts - Underground Metal Website Conversion

*These prompts are designed for sequential execution with Cursor AI. Each phase should be completed, committed, and PR'd before moving to the next phase.*

---

## Phase 1: Theme System Overhaul 🎨

```
Design documents are located in the docs folder. When in doubt, check here for system design specs:
docs\Action-Plan.md (work list and status)
docs\Conversion-Plan-Full.md (detailed conversation from current site to full stack and mobile app)
docs\SRD-new-site.md (full SRD for the final version of the site - USE SECTIONS 1-5 ONLY)

I need you to implement the complete theme system overhaul as outlined in Phase 1 of the Action Plan. 

Reference the "Three Style Guide Variants" section of the SRD-new-site.md and the detailed implementation in Phase 1 of the Conversion Plan. Create the ThemeContext system with all three underground variants (atmospheric, raw, modern), update the Tailwind configuration for CSS custom properties, add the Google Fonts imports, and implement the underground CSS styling.

Make sure to:
- Create the complete ThemeContext with localStorage persistence
- Update tailwind.config.js with the underground color system and fonts
- Add all required Google Fonts to index.html
- Replace the existing CSS with underground-appropriate styling
- Test that theme switching works and persists across browser sessions

Update the Action Plan markdown with ✅ for completed tasks and 🟡/❌ for any issues you encounter.
```

---

## Phase 2: Admin Content Management System 🛡️

```
Design documents are located in the docs folder. When in doubt, check here for system design specs:
docs\Action-Plan.md (work list and status)
docs\Conversion-Plan-Full.md (detailed conversation from current site to full stack and mobile app)
docs\SRD-new-site.md (full SRD for the final version of the site - USE SECTIONS 1-5 ONLY)

Implement the complete admin content management system as specified in Phase 2 of the Action Plan.

Follow the "Admin Content Management System" section of the SRD and the detailed component specifications in Phase 2 of the Conversion Plan. Build the AdminContext system, EditableText component, and AdminPanel interface with full inline editing capabilities. 

Key deliverables:
- AdminContext.tsx with authentication and content management
- EditableText.tsx component supporting both single and multi-line editing
- AdminPanel.tsx with theme switching and edit mode controls
- Full integration with localStorage for content persistence
- Password-protected admin access (use "underground666" as default)

Test the complete admin workflow: login → edit mode → inline editing → content persistence → theme switching.

Update the Action Plan status and note any human intervention items that arise.
```

---

## Phase 3: Underground Component Conversion 🔥

```
Design documents are located in the docs folder. When in doubt, check here for system design specs:
docs\Action-Plan.md (work list and status)
docs\Conversion-Plan-Full.md (detailed conversation from current site to full stack and mobile app)
docs\SRD-new-site.md (full SRD for the final version of the site - USE SECTIONS 1-5 ONLY)

Convert the existing Crimson Throne components to underground metal compliance as outlined in Phase 3 of the Action Plan.

Reference the "Research-Based Underground Requirements" and "Single-Page React Application Essentials" sections of the SRD. Follow the detailed component updates in Phase 3 of the Conversion Plan to transform App.tsx, Hero, About, and Header components.

Execute these conversions:
- Update App.tsx with new context providers and AdminPanel
- Convert Hero section with EditableText components and underground styling
- Transform About section to reflect underground metal values and terminology
- Create underground-appropriate navigation with proper labels (COVEN, SOUNDS, RITUALS, etc.)
- Ensure all components work with the three theme variants

Verify that the underground aesthetic is properly applied and all editable content functions correctly. Test mobile responsiveness throughout.

Mark completed items in the Action Plan and flag any integration issues.
```

---

## Phase 4: Community Archive & Underground Features 📸

```
Design documents are located in the docs folder. When in doubt, check here for system design specs:
docs\Action-Plan.md (work list and status)
docs\Conversion-Plan-Full.md (detailed conversation from current site to full stack and mobile app)
docs\SRD-new-site.md (full SRD for the final version of the site - USE SECTIONS 1-5 ONLY)

Implement the innovative Community Archive Project and complete the underground feature set as detailed in Phase 4 of the Action Plan.

This is the key differentiator - reference the "Community Archive Project" description in the SRD and follow the comprehensive implementation in Phase 4 of the Conversion Plan. Also update the Music section to prioritize Bandcamp and underground distribution.

Build these features:
- Complete CommunityArchive component with filtering, upload modal, and fan contribution system
- Update Music section with Bandcamp-first approach and demo archive integration
- Convert remaining sections (Tour, Contact) to underground terminology and values
- Ensure all new features work seamlessly with the admin system and theme variants

Test the complete Community Archive workflow: filtering → upload form → contribution display → verification system.

Update Action Plan status and ensure this innovative feature is fully functional before proceeding.
```

---

## Phase 5: Underground CSS & Styling Polish ✨

```
Design documents are located in the docs folder. When in doubt, check here for system design specs:
docs\Action-Plan.md (work list and status)
docs\Conversion-Plan-Full.md (detailed conversation from current site to full stack and mobile app)
docs\SRD-new-site.md (full SRD for the final version of the site - USE SECTIONS 1-5 ONLY)

Complete the underground styling system and visual polish as specified in Phase 5 of the Action Plan.

Reference the detailed style guide variants in the SRD and follow the CSS implementation specifications in Phase 5 of the Conversion Plan. Focus on creating the authentic underground aesthetic while maintaining technical excellence.

Implement:
- All underground component utility classes (.underground-btn-primary, .underground-card, etc.)
- Theme-specific typography utilities and proper font switching
- Underground-appropriate animations (pulse, slide-up) with performance optimization
- Cross-browser testing and mobile responsiveness verification
- Final visual polish to ensure authentic underground aesthetic

Run comprehensive testing across all three theme variants in multiple browsers. Verify that the underground aesthetic is consistent and authentic throughout.

Update the Action Plan with testing results and any cross-browser compatibility issues.
```

---

## Phase 6: Integration Testing & Migration Prep 🧪

```
Design documents are located in the docs folder. When in doubt, check here for system design specs:
docs\Action-Plan.md (work list and status)
docs\Conversion-Plan-Full.md (detailed conversation from current site to full stack and mobile app)
docs\SRD-new-site.md (full SRD for the final version of the site - USE SECTIONS 1-5 ONLY)

Complete the final integration testing and migration preparation as outlined in Phase 6 of the Action Plan.

Follow the testing procedures in the Conversion Plan and prepare the migration utilities. Install any additional dependencies and create the content migration system.

Execute:
- Install required npm packages (react-contenteditable, react-easy-edit, date-fns)
- Create the migration helper script for existing Crimson Throne content
- Build the testing checklist utility for underground compliance verification
- Run comprehensive performance and accessibility audits
- Verify all features work together seamlessly

Focus on ensuring the migration preserves all existing content while transforming it to fit the underground aesthetic. Test the complete user journey from admin login through content editing to community archive interaction.

Mark all testing items in the Action Plan and prepare a comprehensive pre-deployment report.

Review the completed steps for this phase of the Action Plan
Verify these steps are complete. Take any corrective action needed including:
-Completing the step
-Marking yellow for human actions required
-Adding comments for human actions required
Then review the code for functionality. Think about what it does, what components interact with each other, how data flows. Correct any errors you find Run type and lint tests
Output a report of all findings in the docs folder as "phase 6 code audit"
commit and push to dev branch, create PR
```

---

## Phase 7: Deployment & Go-Live 🚀

```
Design documents are located in the docs folder. When in doubt, check here for system design specs:
docs\Action-Plan.md (work list and status)
docs\Conversion-Plan-Full.md (detailed conversation from current site to full stack and mobile app)
docs\SRD-new-site.md (full SRD for the final version of the site - USE SECTIONS 1-5 ONLY)

Execute the deployment and go-live procedures as detailed in Phase 7 of the Action Plan.

Follow the deployment checklist in the Conversion Plan and ensure a smooth transition from the existing Crimson Throne site to the new underground metal platform.

Complete these final steps:
- Run the complete pre-deployment checklist verification
- Execute the migration script to transfer existing content
- Update admin credentials from the default password
- Create deployment-ready build with all optimizations
- Document the admin system usage and underground community guidelines

Prepare comprehensive documentation for the completed conversion including:
- Admin user guide for inline editing and theme switching
- Underground community guidelines for the Archive Project
- Performance metrics and compliance verification
- Post-deployment monitoring setup recommendations

Update the final Action Plan status and provide a complete project summary with any outstanding items for human review.

This is the final phase - ensure everything is production-ready and the underground metal community will be proud of this authentic platform.

Review the completed steps for this phase of the Action Plan
Verify these steps are complete. Take any corrective action needed including:
-Completing the step
-Marking yellow for human actions required
-Adding comments for human actions required
Then review the code for functionality. Think about what it does, what components interact with each other, how data flows. Correct any errors you find Run type and lint tests
Output a report of all findings in the docs folder as "phase 7 code audit"
commit and push to dev branch, create PR
```

---

## Additional Notes for Vibe Coding

**Context Documents**: All prompts assume you have access to:
- `docs/Action-Plan.md` - Task status tracking
- `docs/Conversion-Plan-Full.md` - Detailed implementation specs  
- `docs/SRD-new-site.md` - Complete system requirements

**Commit Strategy**: Each phase should result in a meaningful commit with descriptive message and a PR for review before proceeding.

**Testing Approach**: Each phase includes its own testing requirements - don't skip the verification steps.

**Underground Authenticity**: Keep the underground metal community values at the forefront of every decision. When in doubt, choose authenticity over commercial polish.

**Human Intervention**: Flag any items requiring human decisions (passwords, content review, hosting config) but continue with development where possible.

---

*These prompts are designed to maintain momentum while ensuring quality. Trust the process and let the underground spirit guide the implementation.* 🤘
