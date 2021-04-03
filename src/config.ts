/* Nano/Banano Node RPC URL */
export const NANO_RPC_URL = 'http://[::1]:7072';

/* Server port when ran locally for development purposes. */
export const APP_DEV_PORT = 3002;

/* Server port when listening to outside requests. */
export const APP_PROD_PORT = 4002;

/* URL path where the app is served.  Example: http://[YOUR-IP]:[APP_DEV_PORT | APP_PROD_PORT]/[APP_PATH] */
export const APP_PATH = 'banano-rpc';

/* List of enabled websites that can bypass server CORS restriction. */
export const URL_WHITE_LIST = [];

/*
   List of actions we can use with Nano RPC Protocol,
   Full list of actions & descriptions here: https://docs.nano.org/commands/rpc-protocol
 */
export const ALLOWED_ACTIONS = [
    // 'account_balance',
    // 'account_block_count',
    // 'account_count',
    // 'account_create',
    // 'account_get',
    // 'account_history',
    'account_info',
    // 'account_key',
    // 'account_list',
    // 'account_move',
    // 'account_remove',
    // 'account_representative',
    // 'account_representative_set',
    // 'account_weight',
    // 'accounts_balances',
    // 'accounts_create',
    // 'accounts_frontiers',
    // 'accounts_pending',
    // 'available_supply',
    // 'block',
    // 'block_confirm',
    // 'blocks',
    // 'blocks_info',
    // 'block_account',
    'block_count',
    // 'block_count_type',
    // 'block_create',
    // 'block_hash',
    // 'successors',
    // 'bootstrap',
    // 'bootstrap_any',
    // 'chain',
    // 'confirmation_history',
    // 'delegators',
    // 'delegators_count',
    // 'deterministic_key',
    // 'frontiers',
    // 'frontier_count',
    // 'history',
    // 'keepalive',
    // 'key_create',
    // 'key_expand',
    // 'krai_from_raw',
    // 'krai_to_raw',
    // 'ledger',
    'mrai_from_raw',
    // 'mrai_to_raw',
    // 'password_change',
    // 'password_enter',
    // 'password_valid',
    // 'payment_begin',
    // 'payment_init',
    // 'payment_end',
    // 'payment_wait',
    'peers',
    // 'pending',
    // 'pending_exists',
    // 'process',
    // 'rai_from_raw',
    // 'rai_to_raw',
    // 'receive',
    // 'receive_minimum',
    // 'receive_minimum_set',
    'representatives',
    'representatives_online',
    // 'republish',
    // 'search_pending',
    // 'search_pending_all',
    // 'send',
    // 'stats',
    // 'stop',
    // 'unchecked',
    // 'unchecked_clear',
    // 'unchecked_get',
    // 'unchecked_keys',
    // 'validate_account_number',
    // 'version',
    // 'wallet_add',
    // 'wallet_add_watch',
    // 'wallet_balance_total',
    // 'wallet_balances',
    // 'wallet_change_seed',
    // 'wallet_contains',
    // 'wallet_create',
    // 'wallet_destroy',
    // 'wallet_export',
    // 'wallet_frontiers',
    // 'wallet_info',
    // 'wallet_key_valid',
    // 'wallet_ledger',
    // 'wallet_lock',
    // 'wallet_locked',
    // 'wallet_pending',
    // 'wallet_representative',
    // 'wallet_representative_set',
    // 'wallet_republish',
    // 'wallet_work_get',
    // 'work_generate',
    // 'work_cancel',
    // 'work_get',
    // 'work_set',
    // 'work_validate',
    // 'work_peer_add',
    // 'work_peers',
    // 'work_peers_clear',
];
