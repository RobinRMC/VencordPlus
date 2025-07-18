/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { EquicordDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import {
    FluxDispatcher,
    GuildMemberStore,
    GuildStore,
    GuildRoleStore,
    Menu,
    SelectedChannelStore,
    SelectedGuildStore,
    UserProfileActions,
    UserStore
} from "@webpack/common";
import { JSX } from "react";

function fetchMembersWithRole(guildId: string, roleId: string) {
    const guildMembers = GuildMemberStore.getMembers(guildId);
    let membersInRole = 0;
    guildMembers.forEach(member => {
        if (member.roles.includes(roleId)) {
            membersInRole++;
        }
    });
    if (Object.keys(guildMembers).length < membersInRole) {
        const chunk = 100;
        const requestCount = Math.ceil(membersInRole / chunk);
        for (let i = 0; i < requestCount; i++) {
            FluxDispatcher.dispatch({
                type: "GUILD_MEMBERS_REQUEST",
                guildId,
                userIds: [],
                query: "",
                limit: chunk,
                withPresences: true,
                notifyOnLimit: true
            });
        }
    }
    const updatedGuildMembers = GuildMemberStore.getMembers(guildId);
    return Object.values(updatedGuildMembers)
        .filter(m => m.roles.includes(roleId))
        .map(m => ({
            ...m,
            user: UserStore.getUser(m.userId)
        }))
        .sort((a, b) => a.user.username.localeCompare(b.user.username));
}

export default definePlugin({
    name: "RoleMembersViewer",
    description: "Shows members with a role when right clicking roles in user profiles or role mentions in messages",
    authors: [{ name: "okiso", id: 274178934143451137n }],

    contextMenus: {
        "dev-context"(children, { id }: { id: string; }) {
            const guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
            if (!guild) return;

            const role = GuildRoleStore.getRole(guild.id, id);
            if (!role) return;

            const guildId = guild.id;
            const membersWithRole = fetchMembersWithRole(guildId, id);

            const memberItems = membersWithRole.map(member => (
                <Menu.MenuItem
                    key={member.userId}
                    id={`role-member-${member.userId}`}
                    label={member.user.username}
                    action={() => {
                        UserProfileActions.openUserProfileModal({
                            userId: member.userId,
                            guildId,
                            channelId: SelectedChannelStore.getChannelId()
                        });
                    }}
                />
            ));

            children.push(
                <Menu.MenuItem
                    id="role-members-viewer"
                    label={`View Members (${role.name}) - ${membersWithRole.length}`}
                >
                    <Menu.MenuGroup>{memberItems}</Menu.MenuGroup>
                </Menu.MenuItem>
            );
        },

        "message"(children, { message }: { message: any; }) {
            const guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
            if (!guild) return;

            const roleMentions = message.content.match(/<@&(\d+)>/g);
            if (!roleMentions?.length) return;

            // Extract unique role IDs from the mentions.
            const roleIds = roleMentions.map(mention => mention.match(/<@&(\d+)>/)![1]);
            const uniqueRoleIds = [...new Set(roleIds)];

            const guildId = guild.id;
            const roleMenuItems: JSX.Element[] = [];

            for (const roleId of uniqueRoleIds as string[]) {
                const role = GuildRoleStore.getRole(guildId, roleId);
                if (!role) continue;

                const membersWithRole = fetchMembersWithRole(guildId, roleId);
                const memberItems = membersWithRole.map(member => (
                    <Menu.MenuItem
                        key={member.userId}
                        id={`role-member-${member.userId}`}
                        label={member.user?.username ?? "Unknown User"}
                        action={() => {
                            UserProfileActions.openUserProfileModal({
                                userId: member.userId,
                                guildId,
                                channelId: SelectedChannelStore.getChannelId()
                            });
                        }}
                    />
                ));

                roleMenuItems.push(
                    <Menu.MenuItem
                        id={`role-members-viewer-${roleId}`}
                        label={`@${role.name} - ${membersWithRole.length}`}
                    >
                        <Menu.MenuGroup>{memberItems}</Menu.MenuGroup>
                    </Menu.MenuItem>
                );
            }

            if (roleMenuItems.length > 0) {
                children.push(
                    <Menu.MenuItem
                        id="role-members-viewer"
                        label={`View Role Members (${roleMenuItems.length} roles)`}
                    >
                        <Menu.MenuGroup>{roleMenuItems}</Menu.MenuGroup>
                    </Menu.MenuItem>
                );
            }
        }
    }
});
