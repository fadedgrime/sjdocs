---
sidebar_position: 5
slug: /admin-guide
sidebar_label: Admin Guide
---

# Admin Guide
At Summit Jump, we use a customized version of **Basic Admin Essentials** created by r_r (also known as TheFurryFish). This guide outlines the admin levels assigned to each rank, the commands available, and the safeguards in place to ensure responsible use of administrative tools.

## Admin Levels
Users with the rank of Operations Technician and above receive admin permissions. Middle Ranks (MR) have limited access to prevent misuse, while HR and SHR staff have access to moderation and high-level admin commands.

### Admin Levels by Rank

| Rank Group | Admin Level |
|:----------------|:------------------|
| Operations Technician, Operations Supervisor, Assistant Floor Manager, Floor Manager (MR) | Moderator |
| Corporate Officer, Executive Officer, Board of Directors (HR) | Administrator |
| Developer, Development Director, Guest Experience Director, Communications Director (SHR) | Senior Administrator |
| Vice President, President, Chief Operating Officer, Chief Executive Officer (Leadership) | Creator |

### Important:
* You cannot run commands on users with a higher admin level than your own.
* Do not run commands on users below you unless it is necessary and appropriate.

## Commands
Below is a list of essential commands and their requirements. Some commands have restrictions to ensure proper use.

### Command Reference

| Command | Admin Level Required | Restrictions / Notes |
|-------------|---------------------------|----------------------------|
| `:cmds` | None | Displays all commands available to you. |
| `:to` | None | Teleports you to a specified user in the server. |
| `:bring` | None | Avoid using on higher ranks or staff unless necessary. |
| `:chatlogs` | None | View chat logs for the current server. |
| `:logs` | None | View all commands executed in the server. |
| `:handtologs` | Administrator+ | View logs of items handed between users. |

### Safeguards
To maintain a fair and responsible admin system, the following safeguards are in place:
* **Cooldown Between Punishments:** When banning or kicking a user, a **45-second cooldown** is imposed between actions. This prevents rapid or abusive punishment.
* **"All" Command Argument:** Attempting to run a command on all users will automatically block the command and send an alert to our Discord server.