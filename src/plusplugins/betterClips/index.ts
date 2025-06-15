/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import definePlugin, { OptionType } from "@utils/types";
import { SelectOption } from "@webpack/types";


const settings = definePluginSettings({
    clipAllStreams: {
        description: "Allows clipping on all streams regardless of the streamer's settings",
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    clipAllParticipants: {
        description: "Allows recording of all voice chat participants regardless of their settings",
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    moreClipSettings: {
        description: "Adds more FPS and duration options in settings",
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "BetterClips",
    authors: [
        { id: 211461918127292416n, name: "Loukious" },
        Devs.niko
    ],
    description: "Allows you to configure extra clipping options for streams",
    settings,
    patches: [
        {
            predicate: () => settings.store.clipAllStreams,
            find: "}isViewerClippingAllowedForUser",
            replacement: {
                match: /isViewerClippingAllowedForUser\(\w+\){/,
                replace: "$&return true;"
            }
        },
        {
            predicate: () => settings.store.clipAllParticipants,
            find: "}isVoiceRecordingAllowedForUser",
            replacement: {
                match: /isVoiceRecordingAllowedForUser\(\w+\){/,
                replace: "$&return true;"
            }
        },
        {
            predicate: () => settings.store.moreClipSettings,
            find: "clips_recording_settings",
            replacement: [
                {
                    match: /\[\{.{0,10}\i.\i.FPS_15.{0,250}\}\]/,
                    replace: "$self.patchFramerates($&)"
                },
                {
                    match: /\[\{.{0,10}\i.\i.SECONDS_30.{0,250}\}\]/,
                    replace: "$self.patchTimeslots($&)"
                },
            ]
        }
    ],
    patchTimeslots(timeslots: SelectOption[]) {
        const newTimeslots = [...timeslots];
        const extraTimeslots = [3, 5, 7, 10];

        extraTimeslots.forEach(timeslot => newTimeslots.push({ value: timeslot * 60000, label: `${timeslot} Minutes` }));

        return newTimeslots;
    },

    patchFramerates(framerates: SelectOption[]) {
        const newFramerates = [...framerates];
        const extraFramerates = [45, 90, 120, 144, 165, 240];

        // Lower framerates than 15FPS have adverse affects on compression, 3 minute clips at 10FPS skyrocket the filesize to 200mb!!
        extraFramerates.forEach(framerate => newFramerates.push({ value: framerate, label: `${framerate}FPS` }));

        return newFramerates.toSorted();
    }
});
