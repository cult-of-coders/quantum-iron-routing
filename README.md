Routing
=======================
```
Q('route homepage', {
    path: '/',
    template: 'ToDo'
});
```

```
{{# if onRoute 'homepage' }}
    <h1>I am on the homepage</h1>
{{/ if }}
```