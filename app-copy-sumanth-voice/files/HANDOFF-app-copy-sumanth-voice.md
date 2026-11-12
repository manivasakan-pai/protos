# App copy in Sumanth voice: developer handoff

Rewrite of the app text in Sumanth voice, plus labels fixed to match what they sit on, checked screen by screen on QA (148 screens, 11 and 12 November 2026). The copy files change 2,556 app keys, 100 login keys and 8,693 slide menu names. 27 changes need code, 9 are decisions for Mani and are not applied. The pricing flows were rewritten on 5 November and are already in the code.

- Before and after, every screen: https://manivasakan-pai.github.io/protos/app-copy-sumanth-voice/index.html
- Line by line, with the reason for each change: https://manivasakan-pai.github.io/protos/app-copy-sumanth-voice/lines.html
- Files: https://manivasakan-pai.github.io/protos/app-copy-sumanth-voice/index.html#files
- Base: `new_dev_migration`, app copy at ca5cafedbf 2026-11-11, login copy at 870ea61 2026-10-27, slide menu at fb6b05167e 2025-07-29.

## 1. What to do

1. Replace the three copy files with the ones in `files/` (section 2). Each is today's `new_dev_migration` file with only the reviewed values changed, so `git diff` shows just those lines.
2. Make the code changes in section 4. Each row names the file and the key.
3. Sync the 12 other locales: `node .claude/skills/sync-language-keys/scripts/langsync.js apply <work.json>` with real translations, then `verify`. Edited labels need a hand-built work JSON (`report` does not flag them).
4. Leave section 5 alone until Mani decides.
5. Pricing (section 6): nothing to do. It is listed so the whole app is in one place.

## 2. Files

| File | Replaces | Keys changed |
|---|---|---|
| `files/en.json` | `public/assets/language/ui/en.json` (pitchdeckdoclist) | 2,556 |
| `files/login-en.json` | `public/assets/json/login/en.json` (pdlogin) | 100 |
| `files/menu-en.json` | `public/assets/language/menu/en.json` (slide menu names) | 8,693 |
| `files/app-copy-changes.xlsx` | Reference: every changed key, before, after, why, and the screens it shows on | |
| `files/code-changes.md` | Reference: the same code changes as section 4 | |

## 3. Changes on screen, by area

The lines below are the ones you can see on the screens. The rest of the keys in the files follow the same rules (sentence case, British spelling, deck not presentation, no em dash, numbers first) and are listed in the spreadsheet.

### Login and sign up

| Before | After | Shows on | Why |
|---|---|---|---|
| Use your work email for 2x free credits. | 2× free credits with your work email. | Log in or sign up, All sign-in options, Continue with Email, Email typed: personal-email hint | Number first; × not x |
| Continue with Email | Continue with email | Log in or sign up, All sign-in options | Sentence case |
| Personal email: use your work email instead for 2x free credits. | Personal email: use your work email instead for 2× free credits. | Email typed: personal-email hint | Multiply sign ×, not x |
| Confirm Password | Confirm password | Create a new account, Create a new account: password rules | Sentence case |
| Enter confirm password | Enter your password again | Create a new account | Plain, exact action |

### Onboarding

| Before | After | Shows on | Why |
|---|---|---|---|
| Project, program and operations leads | Project, programme and operations leads | Which of these best describes you?, Role picked | British spelling: programme |
| Pipeline sources first, a free preview of next quarter, and Pro with CRM sync on the pricing page. | Pipeline sources first, a free preview of next quarter and Pro with CRM sync on the pricing page. | Which of these best describes you? | Grammar: Oxford comma |
| Finance sheet as the source, investor link tracking in the checklist, and a monthly update on Home. | Finance sheet as the source, investor link tracking in the checklist and a monthly update on Home. | Role picked | Grammar: Oxford comma |

### Create flow

| Before | After | Shows on | Why |
|---|---|---|---|
| Leaders are creating presentations for | Leaders are creating decks for | Create: first deck, Create: Design popover, Import PowerPoint, Add files, Design › Add new Brand Kit | House word: deck |
| Update a presentation | Update a deck | Create: first deck, Create: Design popover, Import PowerPoint, Add files, Design › Add new Brand Kit | House word: deck |
| Presentation time | Talk time | Create: Options popover, Create › Options › Slide count, Options › Language, Options › Use case, Options › Shown, Options › Narrative | Same word as the summary line |
| Shown | How it’s shown | Create: Options popover, Create › Options › Slide count, Options › Language, Options › Use case, Options › Shown, Options › Narrative | Field label does not say what it picks; the options are a stage, a meeting room, a video call, read on its own, printed. |
| Each template is built around a job: the outline, the numbers each slide needs, and a look. Refreshable templates update from your CRM or sheet. | Each template is built around a job: the outline, the numbers each slide needs and a look. Refreshable templates update from your CRM or sheet. | Choose a template | Grammar: Oxford comma |
| Pitch Deck | Pitch deck | Choose a template | Grammar: pitch deck is two words |
| Refer & earn | Refer and earn | Choose a template, Update a deck, Deck menu (More actions) › Share, Deck menu (More actions) › Rename | "and", not "&" |
| Invite teammates | Invite members | Choose a template, Update a deck, Deck menu (More actions) › Share, Deck menu (More actions) › Rename | Sidebar button opens a dialog titled Invite members, and Settings calls the same people Members. |
| Select a presentation | Choose a deck to update | Update a deck | Opened from 'Update a deck' but the title does not say what the pick is for, and the sibling card in the same flow says 'Choose'. |
| Search for presentations... | Search for decks | Update a deck | Had "..." on a placeholder |
| Connect a data source | Connect your CRM | Sync from CRM | Opened from 'Sync from CRM' and the list holds only CRMs (Salesforce, Zoho CRM, HubSpot, Pipedrive); 'data source' is broader than what is here. |
| to keep your deck fresh | to keep your deck up to date | Sync from CRM | Exact outcome, no mood word |
| We read your latest data and turn it into slides: read-only, we never write back. | We read your latest data and turn it into slides. Read-only: we never write back. | Sync from CRM | No em dash |
| {tier} · {n} credits/slide | {tier} · {n} credits a slide | Create: which company, Create: who is it for, Create: questions about your numbers, Building your deck | House format: "a slide" |
| What company is this presentation for? | What company is this deck for? | Create: which company | House word: deck |
| Skip: not about a specific company | Skip: not about a specific company | Create: who is it for, Create: questions about your numbers, Building your deck | No em dash |
| Or, type your own response... | Or type your own response | Create: who is it for, Building your deck | Placeholder: no dots, no stray comma |
| Export to PowerPoint | Export | Deck menu (More actions) › Share | Tab holds PowerPoint, Google Slides, PDF and Image, but names only PowerPoint. **Needs a code change (section 4).** |
| Invite to collaborate | Invite | Deck menu (More actions) › Share | Tab defaults to Can view and the hint under it says read-only, so 'collaborate' overstates what most invites give. |
| Only this deck, read-only. They join {workspace} as a Guest, no seat is used. | Only this deck, read-only. They join {workspace} as a guest; no seat is used. | Deck menu (More actions) › Share | Grammar: role not a proper noun |
| Back to Brand Kit | Back to Design | Design › Add new Brand Kit | Back link returns to the Design picker (titled 'Design'), not the Brand Kit page. |
| Let's create your Brand Kit | Create your Brand Kit | Design › Add new Brand Kit | No "Let's"; plain imperative |
| Fundraising & investors | Fundraising and investors | Options › Use case | "and", not "&" |
| Sales & customers | Sales and customers | Options › Use case | "and", not "&" |

### Settings

| Before | After | Shows on | Why |
|---|---|---|---|
| Refer & earn | Refer and earn | Settings: Profile, Settings: General, Settings: Members, Settings: AI assistants and API, Settings: Data and privacy, New project, Search decks, settings, actions ⌘K, Set a password, Talk to us, Create group | "and", not "&" |
| Chosen at sign-up. Sets your Home, suggested templates, the plans we show first and the emails you get. Applies right away. | Chosen at sign-up. Sets your Home, suggested templates, the plans we show first and the emails you get. | Settings: Profile, New project, Search decks, settings, actions ⌘K, Set a password | The Which describes you select is read-only, so "Applies right away" promises a change the person cannot make. |
| Not set. You sign in with Google. | Not set: you sign in with Google. | Settings: Profile, New project, Search decks, settings, actions ⌘K, Set a password | Colon hinge, not split "Not X. Y." |
| Invite teammates | Invite members | Settings: Profile, Settings: General, Settings: Members, Settings: AI assistants and API, Settings: Data and privacy, New project, Search decks, settings, actions ⌘K, Set a password, Talk to us, Create group | Sidebar button opens a dialog titled Invite members, and Settings calls the same people Members. |
| Allow anyone with | Allow anyone with an email at | Settings: General | Reads as anyone with the app; the setting is for people with a presentations.ai email (Members says "Anyone with a @presentations.ai email can join"). |
| as a Member | as a member | Settings: Members, Talk to us | Grammar: role not a proper noun |
| Admins manage billing and members. Members create and edit decks. Guests see only what is shared with them. | Admins manage billing and members. Members create and edit. Guests comment and present. | Settings: Members, Talk to us | Names Editors and Viewers, but the workspace roles on this screen are Owner, Admin, Member and Guest (“join as a Member”, role Owner). |
| Credits Used | Credits used | Settings: Members, Talk to us | Sentence case |
| The Owner and Admins always invite directly. A member's invite for someone new waits for their approval unless this is on. | The owner and admins always invite directly. A member's invite for someone new waits for their approval unless this is on. | Settings: Members, Talk to us | Grammar: roles not proper nouns |
| Use Presentations.AI from your AI assistant | Use Presentations.AI from your AI assistant or app | Settings: AI assistants and API | The section holds MCP integration and REST API integration ("ideal for web, mobile and backend apps"), but the title names only the AI assistant. |
| MCP Integration | MCP integration | Settings: AI assistants and API | Grammar: sentence case |
| REST API Integration | REST API integration | Settings: AI assistants and API | Grammar: sentence case |
| Traditional HTTP API with JSON responses and bearer token authentication, ideal for web, mobile, and backend apps. | Traditional HTTP API with JSON responses and bearer token authentication, ideal for web, mobile and backend apps. | Settings: AI assistants and API | Grammar: Oxford comma |
| Your API keys are used to access the API on your own behalf. You will be the creator of presentations made with the API. Check out the | Your API keys access the API on your behalf. You are the creator of decks made with the API. See the | Settings: AI assistants and API | House word: deck; plain verbs, shorter |
| Create presentations at scale | Create decks at scale | Settings: AI assistants and API | House word: deck |
| Automate presentations by integrating with your app or workflow. | Create decks automatically from your app or workflow. | Settings: AI assistants and API | House word: deck; plain verb |
| Ex: Marketing Project | Ex: Marketing project | New project | Sentence case |
| Your password should be 10+ characters and a mix of letters, symbols and numbers. | Use at least 10 characters, with letters, numbers and symbols. | Set a password | Exact limit stated, no hedge |
| New Password | New password | Set a password | Sentence case |
| Update your password | Set a password | Set a password | Opened from Set a password on a row that says the password is not set, yet the title says Update and the first field asks for the current password. **Needs a code change (section 4).** |

### Plans, billing, credits and checkout

| Before | After | Shows on | Why |
|---|---|---|---|
| Refer & earn | Refer and earn | Credits in the sidebar, Hire an expert, Refer & earn, Credits in the top bar, Settings: Plan and billing (Free), Settings: Credits and usage, Plan and billing: Pro monthly, Change plan from Pro monthly, Cancel renewal: step 1, Buy more credits, Credit history, Buy 2,000 credits, Credits and usage: Pro monthly, Home on Pro monthly, Manage your plan: switch to Pro yearly, Plan and billing: Gold, renewal cancelled, Switch to yearly (Gold, renewal off), Home: Gold, renewal cancelled, Plan and billing: Gold monthly, Change plan from Gold monthly, Change plan from Gold: Yearly, Cancel renewal 1: reminder offer, Cancel renewal 2: what stays yours, Cancel renewal 3: why are you cancelling, Cancel renewal 4: 20% off to stay, Plan and billing: Gold yearly, Change plan from Gold yearly, Cancel renewal on a yearly plan: step 1, Cancel renewal on a yearly plan: step 2, Home on Gold, Credits and usage: Gold, Members on Gold, Invite teammates on Gold, Plan and billing: Gold yearly, renewal cancelled, Plan and billing: Basic yearly, Change plan from Basic yearly, Home on Basic yearly, Credits and usage: Basic yearly, Cancel renewal 1: Basic yearly, Plan and billing: Pro yearly, Change plan from Pro yearly, Cancel renewal 1: Pro yearly, Cancel renewal 2: Pro yearly, Download again, Get Started, X, Refer & earn › Write a review, X › Open X, Write a review › Write my review, Add review link | "and", not "&" |
| Invite teammates | Invite members | Credits in the sidebar, Hire an expert, Refer & earn, Credits in the top bar, Settings: Plan and billing (Free), Settings: Credits and usage, Plan and billing: Pro monthly, Change plan from Pro monthly, Cancel renewal: step 1, Buy more credits, Credit history, Buy 2,000 credits, Credits and usage: Pro monthly, Home on Pro monthly, Manage your plan: switch to Pro yearly, Plan and billing: Gold, renewal cancelled, Switch to yearly (Gold, renewal off), Home: Gold, renewal cancelled, Plan and billing: Gold monthly, Change plan from Gold monthly, Change plan from Gold: Yearly, Cancel renewal 1: reminder offer, Cancel renewal 2: what stays yours, Cancel renewal 3: why are you cancelling, Cancel renewal 4: 20% off to stay, Plan and billing: Gold yearly, Change plan from Gold yearly, Cancel renewal on a yearly plan: step 1, Cancel renewal on a yearly plan: step 2, Home on Gold, Credits and usage: Gold, Members on Gold, Invite teammates on Gold, Plan and billing: Gold yearly, renewal cancelled, Plan and billing: Basic yearly, Change plan from Basic yearly, Home on Basic yearly, Credits and usage: Basic yearly, Cancel renewal 1: Basic yearly, Plan and billing: Pro yearly, Change plan from Pro yearly, Cancel renewal 1: Pro yearly, Cancel renewal 2: Pro yearly, Download again, Get Started, X, Refer & earn › Write a review, X › Open X, Write a review › Write my review, Add review link | Sidebar button opens a dialog titled Invite members, and Settings calls the same people Members. |
| Expert designers who finish your deck inside your workspace. Fixed prices, tracked delivery, and your deck stays private. | Expert designers who finish your deck inside your workspace. Fixed prices, tracked delivery and your deck stays private. | Hire an expert, Get Started | Grammar: Oxford comma removed |
| For existing decks that need a polished, on-brand design without the rush fee. | For existing decks that need a finished, on-brand design without the rush fee. | Hire an expert, Get Started | No mood adjective ("polished") |
| Get Started | Start an order | Hire an expert, Get Started | No 'Get started'; verb + object |
| Credits earned this year | Sign-up credits this year | Refer & earn, X, Refer & earn › Write a review, X › Open X, Write a review › Write my review | Sits under the Earn more credits section but counts only friend sign-up credits (signup_credits_earned, cap 1,000,000); post and G2 credits are not in it. |
| Upgrade Plans | Upgrade plans | Settings: Plan and billing (Free) | Sentence case |
| per user/month | a seat a month | Settings: Plan and billing (Free) | A seat, not a user |
| Pro's 5,000 credits a year: about 55 decks of 9 slides | Pro's 8,000 credits a year: about 88 decks of 9 slides | Settings: Credits and usage, Credits and usage: Pro monthly, Credits and usage: Gold, Credits and usage: Basic yearly | Pro is 8,000 credits a year on the plan picker (2 Nov sheet); 8,000 ÷ 90 = about 88 |
| Always free: themes, Brand Kit, typing your own edits, present, share and download. | No credits needed: themes, Brand Kit, your own edits, presenting, sharing and downloading. | Settings: Credits and usage, Credits and usage: Pro monthly, Credits and usage: Gold, Credits and usage: Basic yearly | The card means these cost no credits, but "free" reads as no plan needed, while the sidebar on the same screen marks Brand Kit as Pro. |
| Full plan credits unlock ({n}) | Full plan credits ({n}) | Change plan from Pro monthly, Manage your plan: switch to Pro yearly, Switch to yearly (Gold, renewal off), Change plan from Gold monthly, Change plan from Gold: Yearly, Change plan from Pro yearly | Shown before payment; 'added' misleads |
| Your {n} unused credits carry over | Your {n} unused credits carry over. | Change plan from Pro monthly, Manage your plan: switch to Pro yearly, Switch to yearly (Gold, renewal off), Change plan from Gold monthly, Change plan from Gold: Yearly, Change plan from Pro yearly | Grammar: sentence missing full stop |
| credits a month, unused carry over | credits a month · unused credits carry over | Change plan from Pro monthly, Manage your plan: switch to Pro yearly | Meta facts joined with · |
| Confirm Payment | Confirm payment | Change plan from Pro monthly, Manage your plan: switch to Pro yearly, Switch to yearly (Gold, renewal off), Change plan from Gold monthly, Change plan from Gold: Yearly, Change plan from Pro yearly | Sentence case |
| Want a smaller plan? Turn off renewal, then pick it when this plan ends on {date}. | For a smaller plan, cancel renewal, then pick it when this plan ends on {date}. | Change plan from Pro monthly, Manage your plan: switch to Pro yearly, Change plan from Gold monthly, Change plan from Gold: Yearly, Change plan from Basic yearly, Change plan from Pro yearly | Plan and billing, which opens this dialog, names the same action Cancel renewal. |
| Keep your plan and we’ll email you a reminder before your renewal, so there are no surprises. | Keep your plan and we’ll email you a reminder before it renews. | Cancel renewal: step 1, Cancel renewal 1: reminder offer, Cancel renewal on a yearly plan: step 1, Cancel renewal 1: Basic yearly, Cancel renewal 1: Pro yearly | Cut filler |
| Credit History | Credit history | Credit history | Sentence case |
| UPI/QR Code | UPI/QR code | Buy 2,000 credits | Sentence case |
| Credit/Debit card | Credit/debit card | Buy 2,000 credits | Grammar: sentence case |
| Download | Export as PPT | Editor on Pro monthly | The button exports a PowerPoint file, so the label names what you get. The present screen and the old top bar already use these words (key exportasppt). **Needs a code change (section 4).** |
| Re-activate renewal | Turn renewal back on | Plan and billing: Gold, renewal cancelled, Switch to yearly (Gold, renewal off), Plan and billing: Gold yearly, renewal cancelled | Plain verb |
| Your subscription will remain active until | Your plan stays on until | Plan and billing: Gold, renewal cancelled, Switch to yearly (Gold, renewal off), Plan and billing: Gold yearly, renewal cancelled | House word: plan |
| Save {amount} a year | {amount} a year less than monthly | Switch to yearly (Gold, renewal off), Change plan from Gold monthly, Change plan from Gold: Yearly | Number first; same as pricing |
| Billed annually | Billed yearly | Switch to yearly (Gold, renewal off), Change plan from Gold monthly, Change plan from Gold: Yearly, Change plan from Basic yearly, Change plan from Pro yearly | Same word: yearly |
| Nothing changes today, you’re on {plan} until {date} | Nothing changes today; you’re on {plan} until {date} | Cancel renewal 2: what stays yours, Cancel renewal on a yearly plan: step 2, Cancel renewal 2: Pro yearly | Semicolon joins fact and caveat |
| Till {date} | Until {date} | Cancel renewal 2: what stays yours, Cancel renewal on a yearly plan: step 2, Cancel renewal 2: Pro yearly | 'Until', as in the heading above it |
| Generating New Decks | Generating new decks | Cancel renewal 2: what stays yours, Cancel renewal on a yearly plan: step 2, Cancel renewal 2: Pro yearly | Sentence case |
| Mind sharing why you’re cancelling? | Why are you cancelling? | Cancel renewal 3: why are you cancelling | No softener; real question |
| Presentation analytics | Deck analytics | Cancel renewal 4: 20% off to stay | House word: deck |
| Custom Themes | Custom themes | Cancel renewal 4: 20% off to stay | Sentence case |
| Longer presentations | Longer decks | Cancel renewal 4: 20% off to stay | House word: deck |
| Download your presentation as an editable PowerPoint file. | Download your deck as an editable PowerPoint file. | Cancel renewal 4: 20% off to stay | House word: deck |
| Stay on {plan}, save {discount} off | Stay on {plan} at {discount} off | Cancel renewal 4: 20% off to stay | One word for the saving: off |
| Worried about being charged next year without notice? | Get a reminder before your next charge | Cancel renewal on a yearly plan: step 1, Cancel renewal 1: Basic yearly, Cancel renewal 1: Pro yearly | Shown on monthly plans too; 'next year' was wrong there |
| Cancelling only stops next year’s renewal. You keep full {plan} access until then, here’s what stays yours: | Cancelling only stops the next renewal. You keep full {plan} access until then. Here’s what stays yours: | Cancel renewal on a yearly plan: step 2, Cancel renewal 2: Pro yearly | Monthly plans renew next month, not next year |
| as a Member | as a member | Members on Gold | Grammar: role not a proper noun |
| Admins manage billing and members. Members create and edit decks. Guests see only what is shared with them. | Admins manage billing and members. Members create and edit. Guests comment and present. | Members on Gold | Names Editors and Viewers, but the workspace roles on this screen are Owner, Admin, Member and Guest (“join as a Member”, role Owner). |
| Credits Used | Credits used | Members on Gold | Sentence case |
| The Owner and Admins always invite directly. A member's invite for someone new waits for their approval unless this is on. | The owner and admins always invite directly. A member's invite for someone new waits for their approval unless this is on. | Members on Gold | Grammar: roles not proper nouns |
| Drag & drop your deck here | Drag and drop your deck here | Get Started | And, not & |
| Supports: PPT, PPTX, PDF, Google Slides (Max 100MB) | PPT, PPTX or PDF · up to 100 MB | Get Started | The drop zone takes files only: the Google Slides link field is commented out and the picker’s accept list has no Google Slides type. |
| You're all set: | Your order: | Get Started | Order summary says you are all set before any deck is uploaded or paid for; Proceed to payment is still disabled. |
| 72 hour | 72 hours | Get Started | Grammar: Plural; reads “designed in 72 hour” |
| Proceed to Payment | Proceed to payment | Get Started | Sentence case |
| 24 hour | 24 hours | Get Started | Grammar: Plural; reads “designed in 24 hour” |
| Add your G2 review | Add your G2 review link | Refer & earn › Write a review, Add review link | Dialog opened by Add review link only takes the review's link; the title reads as if you write the review here. |
| Submit for review | Send my review link | Refer & earn › Write a review, Add review link | No 'Submit'; names the object |

### Home dashboard

| Before | After | Shows on | Why |
|---|---|---|---|
| Refer & earn | Refer and earn | Home: no decks yet, Home: Created by me, Home: Starred, Home: Shared with me, Home: Downloads, Home: Trash, Search (⌘K), Workspace menu, Create project, Create a folder, Invite teammates, Templates, Brand Kit, Home with a deck, Deck card menu, Home: list view, Account menu, Help and support, Notifications, New project, Use this template, Open Oliver Twist: Story Analysis and Re, Add new Brand Kit, Q3 2026 Sales Review: recurring deck card, Weekly pipeline call Every Monday 08:00 , Board update, monthly First Tuesday of t, More options, More options › Rename, More options › Set as default | "and", not "&" |
| Invite teammates | Invite members | Home: no decks yet, Home: Created by me, Home: Starred, Home: Shared with me, Home: Downloads, Home: Trash, Search (⌘K), Workspace menu, Create project, Create a folder, Invite teammates, Templates, Brand Kit, Home with a deck, Deck card menu, Home: list view, Account menu, Help and support, Notifications, New project, Use this template, Open Oliver Twist: Story Analysis and Re, Add new Brand Kit, Q3 2026 Sales Review: recurring deck card, Weekly pipeline call Every Monday 08:00 , Board update, monthly First Tuesday of t, More options, More options › Rename, More options › Set as default | Sidebar button opens a dialog titled Invite members, and Settings calls the same people Members. |
| Unfinished presentations will be saved here automatically | Decks you create are saved here automatically. | Home: Created by me | Empty state of the Created by me tab describes a drafts list; the tab holds every deck you create, finished or not. |
| Presentations | Decks | Home: Trash | House word: deck |
| Deleted presentations stay here for 30 days. | Deleted decks stay here for 30 days. | Home: Trash | House word: deck |
| Create or Join workspace | Create or join workspace | Workspace menu | Sentence case |
| Ex: Marketing Project | Ex: Marketing project | Create project, New project | Sentence case |
| Each template is built around a job: the outline, the numbers each slide needs, and a look. Refreshable templates update from your CRM or sheet. | Each template is built around a job: the outline, the numbers each slide needs and a look. Refreshable templates update from your CRM or sheet. | Templates | Grammar: Oxford comma |
| Pitch Deck | Pitch deck | Templates, Use this template, Open Oliver Twist: Story Analysis and Re | Grammar: pitch deck is two words |
| Refresh Data | Refresh data | Deck card menu | Sentence case |
| Notifications | Notification settings | Account menu | Account menu item opens notification settings, while the bell beside it opens a panel also titled Notifications. **Needs a code change (section 4).** |
| Let's create your Brand Kit | Create your Brand Kit | Add new Brand Kit | No "Let's"; plain imperative |
| Q4 numbers arrived: {count} values changed on 6 slides. | Q4 numbers arrived: {count} changed on 6 slides. | Q3 2026 Sales Review: recurring deck card | Same dialog calls them "14 bound numbers" in the meta line and "numbers updated" in Recent runs; the banner switches to "values". |
| Slide Title | Slide title | More options, More options › Rename, More options › Set as default | Sentence case |
| Body text appears in paragraphs, bullet points, captions, and labels throughout your slides. | Body text appears in paragraphs, bullet points, captions and labels throughout your slides. | More options, More options › Rename, More options › Set as default | Grammar: Oxford comma |
| This style is saved and automatically applied to all your presentations. No need to set up your brand design each time. | This style is saved and applied to all your decks, so you set it up once. | More options, More options › Rename, More options › Set as default | House word: deck; shorter |

### Editor

| Before | After | Shows on | Why |
|---|---|---|---|
| Download | Export as PPT | Opening a deck, Editor, Insert menu, Style panel, Edit with AI, Slide actions, Deck menu, Review (Deck Score), Credits in the editor, New slide, Text selected | The button exports a PowerPoint file, so the label names what you get. The present screen and the old top bar already use these words (key exportasppt). **Needs a code change (section 4).** |
| Insert with a prompt | New slide with a prompt | Insert menu | Adds a new slide, but the rail's New slide menu on the same screen calls this action "New slide with a prompt". |
| Insert from template | New slide from template | Insert menu | Adds a new slide, but the rail's New slide menu on the same screen calls this action "New slide from template". |
| Click a brand kit to apply it to every slide. Undo restores the previous look. | Click a Brand Kit to apply it to every slide. Undo restores the previous look. | Style panel | Names the feature: Brand Kit |
| Color | Colour | Style panel | British spelling: colour |
| Redesign slide(Remix) | Redesign slide (Remix) | Edit with AI | Spacing fix |
| Search AI action | Search AI actions | Edit with AI | Grammar: Singular should be plural |
| Slide colors | Slide colours | Slide actions | British spelling: colours |
| Refresh Data | Refresh data | Deck menu | Sentence case |
| Duplicate presentation | Duplicate deck | Deck menu | House word: deck |
| Delete presentation | Delete deck | Deck menu | House word: deck |

### Share, present and viewer

| Before | After | Shows on | Why |
|---|---|---|---|
| Export to PowerPoint | Export | Share, Share: Export to PowerPoint, Share: Invite to collaborate, Share: Advanced settings | Tab holds PowerPoint, Google Slides, PDF and Image, but names only PowerPoint. **Needs a code change (section 4).** |
| Invite to collaborate | Invite | Share, Share: Export to PowerPoint, Share: Invite to collaborate, Share: Advanced settings | Tab defaults to Can view and the hint under it says read-only, so 'collaborate' overstates what most invites give. |
| Share on social media | Where to share | Share, Share: Advanced settings | Heading sits over LinkedIn, X, Facebook, Email and Embed; Email and Embed are not social media. |
| Say what you think of presentations.ai | Say what you think of Presentations.AI | Share, Share: Advanced settings | Grammar: Brand case |
| Preparing your file for export... | Preparing your file for export… | Download | Live progress: one … character |
| Making sure your slides look sharp… | Preparing your slides… | Download | No mood in loading line |
| Almost there... | Finishing your export… | Download | Had "..."; one … character |
| Download | Export as PPT | Present | The button exports a PowerPoint file, so the label names what you get. The present screen and the old top bar already use these words (key exportasppt). **Needs a code change (section 4).** |
| Only this deck, read-only. They join {workspace} as a Guest, no seat is used. | Only this deck, read-only. They join {workspace} as a guest; no seat is used. | Share: Invite to collaborate | Grammar: role not a proper noun |
| Password protect your presentation | Password-protect your deck | Share: Advanced settings | House word: deck |

### Mobile web

| Before | After | Shows on | Why |
|---|---|---|---|
| Leaders are creating presentations for | Leaders are creating decks for | Mobile: Create | House word: deck |
| Update a presentation | Update a deck | Mobile: Create | House word: deck |
| Download | Export as PPT | Mobile: deck | The button exports a PowerPoint file, so the label names what you get. The present screen and the old top bar already use these words (key exportasppt). **Needs a code change (section 4).** |
| Chosen at sign-up. Sets your Home, suggested templates, the plans we show first and the emails you get. Applies right away. | Chosen at sign-up. Sets your Home, suggested templates, the plans we show first and the emails you get. | Mobile: Settings | The Which describes you select is read-only, so "Applies right away" promises a change the person cannot make. |

## 4. Code changes

The copy files cannot make these on their own: the key is shared with a place where today's text is right, the text is written in the code, or the screen shows a bug.

### Labels that need a new key or a logic change

| Screen | Today | Should read | Change | Where |
|---|---|---|---|---|
| Choose a template | 1 slides | 1 slide | Key: `slide_one ("slide"), picked when n is 1`. Card count uses the plural word for every count, so one-slide templates read '1 slides'. | src/listing/core/screens/templateflow/usetemplate/TemplateGalleryStep.jsx:132 (`${n} ${t("hire_slides")}`; hire_slides also used by HireAnExpertV5 and TemplateDetailsModal) |
| Deck menu (More actions) › Share | Export to PowerPoint | Export | Key: `export`. Tab holds PowerPoint, Google Slides, PDF and Image, but names only PowerPoint. | src/listing/core/screens/views/share/ShareScreen.jsx:18 (key also used by AiCreditsScreen and BillingSettings, where PowerPoint is right) |
| Create › Options › Slide count | Let AI decide | Auto | Key: `cpo_auto`. Default slide count says 'Let AI decide' while Language, Level of detail and Effort on the same panel call the same default 'Auto'. | src/chat/constants.js:19 and src/chat/components/OnboardLandingUI.jsx:1543 (hard-coded labelKey; the other options there are hard-coded too) |
| Settings: AI assistants and API | Your API keys are used to access the API on your own behalf. You will be the creator of presentations made with the API. Check out the API documentation for more information and how to use it. | See the API documentation for how to use it. | Key: `apikeys_see_docs_lead (new, "See the"; then apidecumentation link and yourapikeysdescription2)`. On this no-API-plan view there are no keys on screen, only the Create decks at scale promo, so the line describes keys the person does not have. | src/listing/core/screens/views/settings/apikeys/ApiKeyScreen.jsx:274-283 sectionDesc, used by the promo branch at :328; keep the full text on the paid view at :348 |
| Set a password | Update your password | Set a password | Key: `setapassword (title when the account has no password; hide Current password then; otherwise the Profile row button reads changepassword "Change password")`. Opened from Set a password on a row that says the password is not set, yet the title says Update and the first field asks for the current password. | src/listing/core/screens/views/settings/profile/ChangePasswordPopup.jsx:101, 111; opener and the unconditional "Not set: you sign in with Google." line at src/listing/core/screens/views/settings/profile/ProfileSettings.jsx:604-608 |
| Talk to us | Questions, bug reports, feedback - we're here for all of it. | Ask us about single sign-on (SAML) for your company. | Key: `contactus_sso_desc (new; passed when opened from the SSO card)`. Opened from Talk to us on the single sign-on card, but the dialog is the general support form about bugs and feedback, with nothing about SSO. | src/listing/core/screens/views/settings/members/MemberSettings.jsx:497 handleTalkToUs dispatches EVENT_CONTACT_US with no context; src/editor/core/components/ContactUs.jsx:106 always uses contactusdescription |
| Upgrade from the editor | Upgrade | See plans | Key: `seeplans`. The editor button only opens the plan picker; the sidebar opens the same picker with See plans. | src/editor/core/view/editor/workspace/topmenu/TopMenu.jsx:1946, 1951 (key upgrade is used in 20 files) |
| Settings: Plan and billing (Free) | 1 Editor · 400 Credits | 1 seat · 400 credits | Key: `seat / seats, credits_lowercase`. Counts seats with a role name the workspace does not use (Members shows Owner, Admin, Member); the paid plan card says "1 seat". | src/listing/core/screens/views/settings/billings/BillingSettings.jsx:957-960 |
| Settings: Plan and billing (Free) | per user/month | a month | Key: `pv2_a_month`. The plan picker shows the same Basic and Pro prices as "a month"; no plan is sold per seat (Gold is one price however many join). | src/listing/core/screens/views/settings/billings/BillingSettings.jsx:1172 (perusermonth is also used by AiCreditsScreen and McpApiCreditsPopup; CreditPlansV2.jsx:126, 200 shows the same via pv2v_per_user_month) |
| Settings: Credits and usage | Deck Slides | Generate | Key: `generate (label usage rows through seriesOf, or add a feature-name label map)`. History names generation by the server's feature name; the chart on the same page calls it Generate. | src/listing/core/screens/views/settings/credits/CreditsSettings.jsx:109 mapHistoryRow (action: item.feature), rendered at :560 and in the filter at :400 |
| Buy more credits | deckslides | Generate | Key: `deckslides (new key, "Generate")`. The Event column prints a raw key: the server's "Deck Slides" has no language key. The Credits page calls this action Generate. | src/listing/core/screens/workspace/credits/AiCreditHistory.jsx:230 t(item.service.toLowerCase().replace(/ /g, "")) |
| Credit history | deckslides | Generate | Key: `deckslides (new key, "Generate")`. The Event column prints a raw key: the server's "Deck Slides" has no language key. The Credits page calls this action Generate. | src/listing/core/screens/views/settings/billings/CreditHistoryPopup.jsx:98 |
| Credits and usage: Pro monthly | Paid plans reset each year. | Your plan adds credits each month. Unused credits carry over. | Key: `paidplansresetinfo_monthly (new; keep paidplansresetinfo for yearly plans)`. Shown on Pro monthly, whose credits come each month and carry over (Manage your plan: "credits a month · unused credits carry over"). | src/listing/core/screens/views/settings/credits/CreditsSettings.jsx:465 |
| Welcome to Gold | You now have 1 license and 5,000 credits: everything you need to create faster and explore premium features. | You now have unlimited collaborators and 5,000 credits with every feature in the plan. | Key: `pv2v_tm_badge ("Unlimited collaborators"; the span already lowercases) on Gold, in place of " 1 " + license`. Gold is the plan with unlimited collaborators, one price however many join, so "1 license" contradicts it. | src/common/components/payment/pricingNew/PaymentSuccessScreenNew.jsx:351 |
| Cancel renewal 2: what stays yours | 1 Presentations | 1 deck | Key: `deckinproject / decksinproject`. The row joins a count to a plural label, so one deck reads “1 Presentations”. | src/listing/core/screens/views/settings/billings/CancelRenewalFlow.jsx:329 (`${docCount} ${getLang("cr_item_presentations")}`); existing keys deckinproject = “{count} deck”, decksinproject = “{count} decks” |
| Cancel renewal 4: 20% off to stay | Pro AI model | Ultra AI model | Key: `pn_up_feat_ai_lbl`. The offer to stay on Gold lists only Pro rows, so a Gold workspace sees the Pro model instead of Gold’s own Ultra model, shared knowledge base, team collaboration and projects. | src/listing/core/screens/views/settings/billings/CancelRenewalFlow.jsx:459 renders <NudgeFeaturePopup> with no features or tier, so NudgeFeaturePopup.jsx:106-108 keeps only non-Gold rows from featuresCatalog.js. On Gold, lead with the Gold rows and drop pro_ai_model. |
| Cancel renewal on a yearly plan: step 2 | 1 Presentations | 1 deck | Key: `deckinproject / decksinproject`. The row joins a count to a plural label, so one deck reads “1 Presentations”. | src/listing/core/screens/views/settings/billings/CancelRenewalFlow.jsx:329 (`${docCount} ${getLang("cr_item_presentations")}`); existing keys deckinproject = “{count} deck”, decksinproject = “{count} decks” |
| Change plan from Basic yearly | Want a smaller plan? Turn off renewal, then pick it when this plan ends on Nov 10, 2027. | (no line on Basic) | Shown on Basic, the smallest paid plan, where there is no smaller plan to pick. | src/common/components/payment/pricingV2/ManagePlanPaneV2.jsx:187 (endsOn skips cancelled, weekly and education plans but not Basic; add current.tierKind !== "basic"), rendered at :280. No new key needed. |
| Change plan from Basic yearly | A Gold plan can only move to Enterprise. | Gold is the top plan. | Key: `pv2mp_gold_top_plan`. Raw server message on a Basic workspace: it talks about Gold and names Enterprise, a plan the app does not sell. | Server error passed to the alert toast while Manage your plan loads. Do not surface it on a non-Gold plan; on Gold, map it to a client key. |
| Change plan from Basic yearly | 8× Pro | 8× Pro credits | Key: `pv2_times_pro_credits`. On the closed Gold card, no credit figure sits beside the badge, so it does not say what the 8× counts. | src/common/components/payment/pricingV2/ManagePlanPaneV2.jsx:225 (badge on the collapsed move card); keep pv2_times_pro in PricingScreenV2.jsx:1394 and CheckoutSummaryV2.jsx:529, where it sits next to the credits figure |
| Cancel renewal 2: Pro yearly | 1 Presentations | 1 deck | Key: `deckinproject / decksinproject`. The row joins a count to a plural label, so one deck reads “1 Presentations”. | src/listing/core/screens/views/settings/billings/CancelRenewalFlow.jsx:329 (`${docCount} ${getLang("cr_item_presentations")}`); existing keys deckinproject = “{count} deck”, decksinproject = “{count} decks” |
| Home: no decks yet | Free Plan | Free plan | Key: `plan_lowercase`. Plan card and workspace switcher build "<Plan> Plan" with a capital P (Free Plan, Gold Plan) while the rest of the app says "Free plan" and "Gold plan". | src/listing/core/screens/views/dashboard/sidepanel/SidePanel.jsx:716 and :727 (`${planName} ${getLang("plan")}`); the plan key is shared with places where "Plan" stands alone and is right, so use a lowercase key here |
| Templates | 1 slides | 11 slides (the template's real count; "1 slide" when it is one) | Key: `slide_lowercase`. Every card reads "1 slides": wrong plural, and the count is wrong too (the same templates open as 11 and 4 slides in z014 and z016). | src/listing/core/screens/templateflow/usetemplate/TemplateGalleryStep.jsx:131-132 (`${n} ${t("hire_slides")}` with n = tpl.slides.length, which looks like the cover only); hire_slides is shared with Hire an expert |
| Templates | Hr/Training | HR and training | Key: `hrtraining`. Category chip shows the raw server name: odd casing and a slash, unlike the other chips. | src/listing/core/screens/templateflow/usetemplate/TemplateGalleryStep.jsx:16 (catTabLabel looks up the normalised key, so adding the key is enough) |
| Brand Kit | Neon Noir brand | Neon Noir | The "brand" suffix is added to generic catalogue kits (Boardroom Gold, Meridian, Neon Noir), which are looks, not anyone's brand; it fits only the workspace's own kit (Presentations.AI brand). | src/listing/core/screens/views/dashboard/brandkit/BrandKitList.jsx:324 (LookCard: drop the suffix there, keep it on KitCard at :247) |
| Account menu | Notifications | Notification settings | Key: `notificationsettings`. Account menu item opens notification settings, while the bell beside it opens a panel also titled Notifications. | src/listing/core/screens/views/dashboard/topmenu/TopMenu.jsx:375 (key shared with NotificationsMenu panel title, Settings nav and NotificationSettings, where Notifications is right) |
| Use this template | Use this template | View template | Key: `viewtemplate`. The template card's hover button says Use this template but only opens this details dialog, which has its own Use this template button. | src/listing/core/screens/views/dashboard/components/DocumentCardView.jsx:371 (onClick → Templates.jsx:218 handleTemplateClick opens TemplateDetailsModal); key shared with TemplateDetailsModal, where it is right |
| Board update, monthly First Tuesday of t | delivered to Email to 6 board members | delivered to 6 board members by email | Key: `deliveredto`. The label and the delivery target are joined, so the meta line reads "delivered to Email to". | src/listing/core/screens/views/dashboard/recurring/RecurringDecks.jsx:17 (delivery: "Email to 6 board members" → "6 board members by email"; label stays, built at :163) |
| More options › Set as default | root kits cannot be a default | This Brand Kit cannot be the default. | Key: `bk2_default_not_allowed`. Set as default is offered on a kit that cannot be the default, and the toast shows raw server text with the internal term "root kits". | src/listing/core/screens/views/dashboard/brandkit/BrandKitEditor.jsx:1545 (hide the Set as default row when the open kit is the ROOT, data.kind === "ROOT", the same test as saveAsCopy in BrandKitScreen.jsx:569); BrandKitScreen.jsx requestSetDefaultKit passes the server message through getApiErrorMessage |
| Share: Invite to collaborate | Export to PowerPoint | Export | Key: `export`. Tab holds PowerPoint, Google Slides, PDF and Image, but names only PowerPoint. | src/listing/core/screens/views/share/ShareScreen.jsx:18 (key also used by AiCreditsScreen and BillingSettings, where PowerPoint is right; formats in ExportScreen.jsx export_powerpoint / export_googleslides / export_pdf / export_image) |
| Editor | Download | Export as PPT | Key: `exportasppt`. The button exports a PowerPoint file, so the label names what you get. The present screen and the old top bar already use these words (key exportasppt). | src/editor/core/view/editor/workspace/topmenu/TopMenu.jsx:2104 (redesign top bar, #exportpptbtn): lang("download") → lang("exportasppt"). Keep "download" as is: 19 other files use it. |

### Text written in the code (not in the copy files)

| Where | Today | Should read |
|---|---|---|
| Sidebar, every page | Free Plan · 1 member | Free plan · 1 member |
| Plan and billing (Free) | 1 Editor · 400 Credits | 1 editor · 400 credits |
| Plan and billing (paid) | ₹1,200/month · 1 seat · 1,200 Credits | ₹1,200 a month · 1 seat · 1,200 credits |
| Plan and billing (Gold yearly) | ₹116,125/year · 1 seat · 66,200 Credits | ₹116,125 a year · 1 seat · 66,200 credits |
| Welcome to Pro / Gold | Welcome to Pro Plan | Welcome to Pro |
| Welcome to Pro / Gold | We've sent you a confirmation email and invoice at {email} | We sent the confirmation and invoice to {email}. |
| Welcome to Pro / Gold | You now have 1 license and 800 credits: everything you need to create faster and explore premium features. | You now have 1 seat and 800 credits. |
| Buy credits | 2000 Credits | 2,000 credits |
| Cancel renewal, step 2 | Nothing changes today, you're on Gold until {date} | Nothing changes today. You're on Gold until {date}. |
| Cancel renewal, step 2 | 1 Presentations | 1 deck |
| Cancel renewal, step 2 | 6,100 Unused Credits | 6,100 unused credits |
| Cancel renewal, step 2 | Cancelling only stops next year's renewal. (shown on monthly plans too) | Cancelling only stops the next renewal. |
| Cancel renewal, step 4 | Loyalty discount(20%) | Loyalty offer · 20% off |
| Hire an expert | Craft Engaging Presentation that Capture your Audience | An expert designs your deck |
| Hire an expert | 24-hour delivery.Work starts immediately. | 24-hour delivery. Work starts right away. |
| Hire an expert | Express 24-hour delivery: perfect for urgent presentations when you need a quick turnaround. | Express: 24-hour delivery, for decks you need fast. |
| Hire an expert | Standard 72-hour delivery: our most popular option, allowing extra time for detailed design work. | Standard: 72-hour delivery, with more time for detailed design. |
| Settings: Profile | Used to sign in and for receipts. Connects your CRM and joins your company workspace | Used to sign in and for receipts. Connects your CRM and joins your company workspace. |
| Hire an expert (team view) | Professional and high-stakes oriented | For board, investor and client decks |
| Hire an expert (team view) | Outcome-focused rather than just design-focused | Works on the story as well as the design |
| Plan and billing (Gold monthly) | ₹12,000/month · 1 seat · 6,200 Credits | ₹12,000 a month · 1 seat · 6,200 credits |
| Plan and billing (Basic yearly) | ₹4,500/year · 1 seat · 4,000 Credits | ₹4,500 a year · 1 seat · 4,000 credits |
| Plan and billing (Pro yearly) | ₹11,400/year · 1 seat · 8,000 Credits | ₹11,400 a year · 1 seat · 8,000 credits |

### Bugs seen on the screens

| Where | What | Fix |
|---|---|---|
| Checkout, Pro monthly | "Before you go: 0% off your first year, for the next hour." shows on monthly checkout. The close offer is 0% there. | Hide the line when the offer is 0%. |
| Cancel renewal, step 2 (monthly plans) | "Cancelling only stops next year's renewal" on a monthly plan. | "Cancelling only stops the next renewal." |
| Manage your plan, Basic yearly | "For a smaller plan, turn off renewal, then pick it when this plan ends" shows on Basic, which is already the smallest paid plan. | Hide the line on Basic, or point to Free. |
| Cancel renewal, step 4 | "Continue to cancel" on the 20% offer cancels at once, with no confirm step. | Add a final confirm, or label the button "Cancel renewal". |
| Manage your plan, Monthly/Yearly switch | Confirm pays for the default option if the Yearly switch hasn't finished loading; the summary panel updates late. | Disable Confirm until the selected plan and amount are loaded. |
| Chart settings | Key startangle shows "End Angle" and endangle shows "Start Angle". | Swap the two labels. |
| Copyright line | Shows "¬©" instead of "©" (encoding). | Save the string as UTF-8. |
| Split content option | Key splitcontent shows "XML". | Check the intended label. |
| Cancel renewal step 2 (p51, p63, p99) | "1 Decks": the count and noun come from code, so one deck still reads plural. | Pick "deck" or "decks" from the count in CancelRenewalFlow. |
| Template cards (c05, h13) | "1 slides" on every one-slide template card. | Use the singular when the count is 1. |
| Hire an expert upload (z020, z021) | "designed in 72 hour." and "24 hour.": the hour unit is not pluralised. | Write "hours" for any count but 1. |
| Plan and billing, change plan, consent lines (p21, p22, p45, p46, p60, p89, p91, p96, p97) | Prices and dates are built in code: "₹1,200/month", "1,200 Credits", "100 Credits used", "Total", and US dates ("December 10, 2026", "Dec 10, 2026", "Nov 10 2026"). | Format money as "₹1,200 a month", counts in sentence case, dates as "10 December 2026" or "10 Dec 2026". |
| Sidebar and workspace switcher (h01, h09, p64) | "Free Plan", "Gold Plan", "Basic Plan": built from the plan subtype plus "Plan", so the reviewed copy key does not reach it. | Use the copy key, or lower-case "plan". |
| Credit history (p24, p25, p02) | Raw event key "deckslides" and "Deck Slides" shown as the event name; "+60000" without a thousands separator. | Map event keys to copy keys; format numbers with separators. |
| Buy credits (p26, p27, p65) | "2000 Credits" and "Buy 2000 credits": numbers without separators. | Format as 2,000. |
| Template categories (c05, h13) | "Hr/Training" category comes from the server. | Rename the category to "HR and training" on the server. |
| Brand Kit (z055) | Toast shows the raw server message "root kits cannot be a default". | Map the server error to a copy key, for example "This Brand Kit cannot be the default." |
| Sign-in and security (z009) | "Set a password" (Google sign-in, no password yet) opens "Update your password" and asks for a current password. | Open a Set password dialog without the current password field. |
| Schedule line (z028) | "delivered to Email to 6 board members": doubled "to", capital "Email". | Fix the sentence template in code. |
| Gold card description (p22, p30, p42, p46, p47, p92, p97) | The pricing-pass Gold line "For teams: unlimited collaborators and frontier AI models" wraps and leaves "models" alone on line 2. | Shorten the line (see Decisions) or widen the card text. |
| Plan feature table (FeatureTableScreen.jsx, line 56) | Hard-coded em dash marks a feature that is not included. It is the only em dash left in on-screen app text; the copy files now have none. | Show a minus icon, or the words "Not included" (with an aria-label), instead of the dash. |

## 5. Decisions for Mani (not applied)

| Screen | Today | Suggested | Question |
|---|---|---|---|
| Which of these best describes you? | Lite | Student price | Lite badge: a student price, or a plan name? No Lite plan exists. |
| Settings: Members | Enterprise | (no badge) | Enterprise badge on single sign-on: plans are Basic, Pro and Gold only. |
| Home: Gold, renewal cancelled | Your investor update, ready on the 1st of every month | Your next investor update | Home hero promises an investor update ready on the 1st of every month, but recurring decks are switched off (SHOW_RECURRING_DECKS = false). |
| Home: Gold, renewal cancelled | Built from your finance sheet. A new month brings new numbers in the same structure. | Start a new deck, or import last month’s PowerPoint and update the numbers. | Same hero, sub line. |
| Home on Gold | Your investor update, ready on the 1st of every month | Your next investor update | Same investor update hero. |
| Home on Gold | Built from your finance sheet. A new month brings new numbers in the same structure. | Start a new deck, or import last month’s PowerPoint and update the numbers. | Same investor update hero. |
| Members on Gold | Enterprise | On request | Same Enterprise badge (Gold members page). |
| Home on Basic yearly | Your investor update, ready on the 1st of every month | Your next investor update | Same investor update hero. |
| Home on Basic yearly | Built from your finance sheet. A new month brings new numbers in the same structure. | Start a new deck, or import last month’s PowerPoint and update the numbers. | Same investor update hero. |
| Download again | Your investor update, ready on the 1st of every month | Your next investor update | Same investor update hero. |
| Download again | Built from your finance sheet. A new month brings new numbers in the same structure. | Start a new deck, or import last month’s PowerPoint and update the numbers. | Same investor update hero. |
| Search (⌘K) | Search decks, settings and actions | Search decks, folders and actions | Search placeholder says "settings"; reviewer says search returns decks, folders and actions only. |
| Search (⌘K) | Search decks, settings, actions | Search decks, folders and actions | Same, top bar placeholder. |

## 6. Pricing flows (already in the code)

Rewritten on 5 November for both flows of the pricing A/B and already on `new_dev_migration`; every line below matches the code today. Nothing to do.

### Question discount

| Before | After | Shows on | Why |
|---|---|---|---|
| Choose the plan that fits your work | Choose a plan for your decks | Pricing page | House word: deck |
| Every paid plan includes editable PowerPoint and PDF export with no watermark. | Every paid plan exports editable PowerPoint and PDF, with no watermark. | Pricing page | Plain verb (exports), fewer words |
| Create and export polished presentations | Edit and export decks as PowerPoint or PDF | Pricing page | Facts, not adjectives ("polished"); deck, not presentation |
| credits per year | credits a year | Pricing page | House format: "a year" |
| {n}x Basic | {n}× Basic | Pricing page | Multiply sign ×, not x |
| {n}x Pro | {n}× Pro | Pricing page | Multiply sign ×, not x |
| / mo | a month | Pricing page | House format: "a month" |
| Best for you | Recommended | Pricing page | Plain badge, no sell |
| Build presentations with advanced AI and your brand | Advanced AI and your Brand Kit on every deck | Pricing page | Deck, not presentation; names the feature (Brand Kit) |
| For high-stakes, high-volume presentation work | For teams: unlimited collaborators and frontier AI models | Pricing page | Says what Gold adds, not mood words |
| Presentation analytics | Deck analytics | Pricing page | House word: deck |
| Cancel any time; access runs to the end of the term. Prefer someone to finish it for you? | Cancel any time; your plan stays on until the end of the billing period. An expert can also finish the deck for you. | Pricing page | Exact limit for yearly and monthly; a statement, not a question |
| One question, asked once. Your answer decides what we show next, if anything. | One question, asked once. Your answer picks the next step, or closes this. | What stopped you? | Drops the hedge "if anything"; says the exact outcome |
| The deck isn’t good enough yet | My deck isn’t ready yet | What stopped you? | Speaks as the person ("my"); plain, no judgement |
| Just looking for now | Not ready to buy yet | What stopped you? | Drops the softener; names the real state |
| Save {p}% on your first year | {p}% off your first year | 20% off the first year | Offer formula: number first |
| Get the same plan and all the same features for {p}% less. | Same plan and features for {p}% less. It renews at the full yearly price after year one. | 20% off the first year | Renewal price stated next to the discount |
| You save {amount} | {amount} less in year one | 20% off the first year | Names when the saving applies |
| Apply {p}% discount | Apply {p}% off | 20% off the first year | Button: verb + exact object |
| Go month to month with Pro | Pay for Pro one month at a time | Pro monthly | Plain verb, says the trade-off |
| Pay {price} a month instead of a whole year. It renews monthly and you can cancel any time. | {price} a month instead of a year upfront. It renews each month; cancel any time. | Pro monthly | Number first; semicolon joins rule and its out |
| {credits} credits a month, renews monthly | {credits} credits a month · renews monthly | Pro monthly | Meta facts joined with · |
| Every Pro feature, with {credits} fresh credits on each billing date. Unused credits carry over. | Every Pro feature. {credits} new credits each month; unused credits carry over. | Pro monthly | Shorter; semicolon joins fact and caveat |
| Start Pro monthly for {price} | Start Pro monthly · {price} | Pro monthly | Cost inline after · |
| Pro yearly works out to {price} a month. | Pro yearly is {price} a month, billed once a year. | Pro monthly | Exact: how yearly is billed |
| An average deck has {slides} slides at {credits} credits each, so about {deck} credits. | An average deck: {slides} slides × {credits} credits = about {deck} credits. | What the credits cover | House maths format: 20 × 10 = 200 |
| {credits} credits, about {decks} decks a year | {credits} credits a year · about {decks} decks | What the credits cover | Meta facts joined with · |
| Let’s fix the deck first | Fix the deck first | Fix the deck first | No "Let’s"; plain imperative |
| Have an expert polish it | Have an expert finish it | Fix the deck first | Says the outcome (finished deck), not a mood verb |

### Instant discount

| Before | After | Shows on | Why |
|---|---|---|---|
| Choose the plan that fits your work | Choose a plan for your decks | Pricing page · Yearly | House word: deck |
| Every paid plan includes editable PowerPoint and PDF export with no watermark. | Every paid plan exports editable PowerPoint and PDF, with no watermark. | Pricing page · Yearly | Plain verb (exports), fewer words |
| Save up to {p}% off | Up to {p}% off | Pricing page · Yearly | One word for the saving, number first |
| Create and export polished presentations | Edit and export decks as PowerPoint or PDF | Pricing page · Yearly | Facts, not adjectives ("polished"); deck, not presentation |
| credits per year | credits a year | Pricing page · Yearly | House format: "a year" |
| {n}x Basic | {n}× Basic | Pricing page · Yearly, Pricing page · Monthly | Multiply sign ×, not x |
| {n}x Pro | {n}× Pro | Pricing page · Yearly, Pricing page · Monthly | Multiply sign ×, not x |
| / mo | a month | Pricing page · Yearly, Pricing page · Monthly | House format: "a month" |
| Best for you | Recommended | Pricing page · Yearly | Plain badge, no sell |
| Build presentations with advanced AI and your brand | Advanced AI and your Brand Kit on every deck | Pricing page · Yearly, Checkout with the offer | Deck, not presentation; names the feature (Brand Kit) |
| For high-stakes, high-volume presentation work | For teams: unlimited collaborators and frontier AI models | Pricing page · Yearly | Says what Gold adds, not mood words |
| Presentation analytics | Deck analytics | Pricing page · Yearly, Checkout with the offer | House word: deck |
| Cancel any time; access runs to the end of the term. Prefer someone to finish it for you? | Cancel any time; your plan stays on until the end of the billing period. An expert can also finish the deck for you. | Pricing page · Yearly | Exact limit for yearly and monthly; a statement, not a question |
| Save {amount} a year vs monthly | {amount} a year less than monthly | Pricing page · Yearly | Number first, no "vs" |
| Save {p}% on your first year | {p}% off your first year | Close offer · 20% off | Offer formula: number first |
| Get the same plan and all the same features for {p}% less. | Same plan and features for {p}% less. It renews at the full yearly price after year one. | Close offer · 20% off | Renewal price stated next to the discount |
| Apply {p}% discount | Apply {p}% off | Close offer · 20% off | Button: verb + exact object |
| Nothing changes except your first-year price. | Nothing changes except your first-year price. Offers never stack. | Close offer · 20% off | Names the offer’s limit |
| / yr | a year | Checkout with the offer | House format: "a year" |
| Loved by 12M+ Presenters | Used by 12M+ presenters | Checkout with the offer | Sentence case; a fact, not a feeling |
| Before you go, | Before you go: | Before you go | Colon as the hinge |
| for the next hour. | your first year, for the next hour. | Before you go | Says what the 20% applies to |
| first year, then {price} | first year, then {price} a year | Pricing page · Offer applied | Renewal price stated in full |
| Save {amount} on your first year ({p}% off) | {amount} off your first year ({p}%) | Pricing page · Offer applied | Number first; one "off", not two |

## 7. Screens not retaken

- Welcome to Pro and Welcome to Gold show only after a real purchase, so their pairs are from the earlier capture.
- Building your deck needs a real deck build, which spends credits.
- Import PowerPoint opens the computer's file picker, so its shot shows the Create page.

## 8. Done when

- [ ] The three copy files are replaced and `git diff` shows only text values.
- [ ] Every row in section 4 is done and checked on its screen.
- [ ] The 12 other locales are synced and `verify` passes.
- [ ] Spot checks: the editor top bar reads "Export as PPT"; the Share dialog's first tab reads "Export"; Create options read "Audience and tone"; the Credits page reads "No credits needed: themes, Brand Kit, your own edits, presenting, sharing and downloading."
