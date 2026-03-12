self.addEventListener('fetch', function(event) {
    // Просто проксируем запросы, ничего не кэшируем
    event.respondWith(fetch(event.request));
});
