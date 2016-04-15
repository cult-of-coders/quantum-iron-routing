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

Quantum Framework has an integrated role manager that you can use *Quantum.Roles*

Q('route /', {
    allowedRoles: ['USER', 'ADMIN']
});

Note: the USER role is applied to all logged in users,