// Cache implementation for experimental features
const cache = new Map();

function setCache(key, value, ttl = 3600) {
    // Enhanced with logging
    console.log(`Setting cache for key: ${key}`);
    cache.set(key, {
        value,
        expires: Date.now() + (ttl * 1000),
        timestamp: new Date().toISOString()
    });
}

function getCache(key) {
    const item = cache.get(key);
    if (!item) return null;
    
    if (Date.now() > item.expires) {
        cache.delete(key);
        return null;
    }
    
    return item.value;
}

module.exports = { setCache, getCache };