const { ShardingManager } = require('discord.js');
const config1 = require('./config/bot')
const manager = new ShardingManager('./index.js', { token: config1.discord.token });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();