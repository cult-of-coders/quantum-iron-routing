Routing
=======================
```
Q('route /', {
    name: 'todo'
    template: 'ToDo'
});
```

```
{{# if onRoute 'homepage' }}
    <h1>I am on the homepage</h1>
{{/ if }}
```

Secure it by roles
=====================

Uses the frameworks' service "roles". Q('service roles')
Q('route /', {
    allowedRoles: ['USER', 'ADMIN']
});

Note: the USER role is applied to all logged in users,