// SPDX-FileCopyrightText: © 2023 OneEyeFPV oneeyefpv@gmail.com
// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-License-Identifier: FS-0.9-or-later

import * as ServerPb from './generated/server_pb.js';
import * as StatusPb from "./generated/google/rpc/status_pb";
import * as StructPb from "google-protobuf/google/protobuf/struct_pb";

export const Empty = ServerPb['Empty'];
export const SetConfigReq = ServerPb['SetConfigReq'];
export const GetGamepadStreamReq = ServerPb['GetGamepadStreamReq'];
export const GetTransmitterStreamReq = ServerPb['GetTransmitterStreamReq'];

// noinspection JSUnusedGlobalSymbols
export const LinkState = ServerPb['LinkState'];
export const SupervisorState = ServerPb['SupervisorState'];
export const PortState = ServerPb['PortState'];

export const StartLinkReq = ServerPb['StartLinkReq'];

export const Gamepad = ServerPb['Gamepad'];
export const Transmitter = ServerPb['Transmitter'];
export const ValidationErrors = ServerPb['ValidationErrors'];
// noinspection JSUnusedGlobalSymbols
export const ValidationError = ServerPb['ValidationError'];

// noinspection JSUnusedGlobalSymbols
export const Status = StatusPb['Status'];

export const Struct = StructPb['Struct'];


// telemetry structs

export const Telemetry = ServerPb['Telemetry'];
export const LinkStatsData = ServerPb['LinkStatsData'];
export const AttitudeData = ServerPb['AttitudeData'];
export const BatteryData = ServerPb['BatteryData'];
export const GPSData = ServerPb['GPSData'];
export const FlightModeData = ServerPb['FlightModeData'];
export const SyncData = ServerPb['SyncData'];
export const LinkTXData = ServerPb['LinkTXData'];
export const LinkRXData = ServerPb['LinkRXData'];
export const VariometerData = ServerPb['VariometerData'];
export const BarometerData = ServerPb['BarometerData'];
export const BarometerVariometerData = ServerPb['BarometerVariometerData'];


// Responses (used mainly for mocks)
export const GetAppInfoRes = ServerPb['GetAppInfoRes'];
export const GetTransmitterRes = ServerPb['GetTransmitterRes'];
export const GetGamepadsRes = ServerPb['GetGamepadsRes'];
export const TransmitterChannels = ServerPb['TransmitterChannels'];
export const TransmitterChannel = ServerPb['TransmitterChannel'];
export const GamepadInputsStates = ServerPb['GamepadInputsStates'];
export const GamepadInputState = ServerPb['GamepadInputState'];
export const GamepadInputType = ServerPb['GamepadInputType'];


