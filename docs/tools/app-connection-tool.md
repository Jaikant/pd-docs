---
title: App Connection Tool
sidebar_position: 4
description: Connect supported apps to a skill.
---

# App Connection Tool

**Estimated Time: 4 minutes**

The App Connection Tool lets a skill use an external app account. Google Calendar is currently supported.

Use this tool when the chatbot should help with scheduling from a connected Google Calendar account.

## Google Calendar

To add Google Calendar:

1. Open the chatbot agent.
2. Go to **Knowledge and actions**.
3. Add an **App connection** action.
4. Choose **Google Calendar**.
5. Connect a Google account or choose an existing connection.
6. Choose the allowed actions and scheduling policy.

You can connect multiple Google accounts/connections and choose which connection the skill should use. If a connection needs reauthorization, reconnect it before selecting it.

## Allowed Actions

Choose what this Google Calendar connection can do:

- **Search available slots** - Let the skill find open appointment times.
- **Book appointments** - Let the skill create calendar bookings.

At least one allowed action must stay selected.

## Scheduling Policy

The scheduling policy controls how appointment availability is handled:

- **Timezone** - The timezone used for availability.
- **Appointment duration** - How long each booking should be.
- **Minimum notice** - How much notice is required before a booking.
- **Booking horizon** - How many days ahead visitors can book.
- **Weekly availability** - The days and time windows when appointments can be booked.

Use these settings to keep chatbot scheduling aligned with the calendar owner's real availability rules.

## Sessions

After a conversation uses Google Calendar, open Sessions to review the app action that ran and the result returned to the assistant.
