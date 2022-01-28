import { Collection } from 'fireorm';

@Collection('guild_configurations')
export class GuildConfiguration {
  id: string;
  logChannelID: string;
  logWebhookID: string;
  serverID: string;
  //done: boolean;
}
