<html>
<head>
    <title>Todo</title>
    <!-- 静态文件放在 /static 文件夹中 -->
    <!-- 引用路径是 /static/... -->
    <link rel="stylesheet" href="/public/css/pure-min.css">
    <style type="text/css">
        .todo-table {
            margin: 0 auto;
        }

        .center {
            text-align: center;
        }

        .completed {
            text-decoration: line-through;
        }
    </style>
</head>

<body>
<div class="center">
    <h1>Todo</h1>
    <form action="/todoAdd" method="post">
      <input type="text" placeholder="Add Todo" name="task">
      <input class="pure-button pure-button-primary" type="submit" value="Add">
    </form>
</div>

<table class="todo-table pure-table pure-table-horizontal pure-table-striped">
    <thead>
        <tr>
            <th>#</th>
            <th>Task</th>
            <th>Created Time</th>
            <th>Updated Time</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
      <!-- <td>{{task }}</td> -->

    {% for to in task %}
    {% if to.complete %}
        {% set rowClass = "completed" %}
    {% else %}
        {% set rowClass = "" %}
    {% endif %}
      <tr class="{{ rowClass }}">
          <td>{{ loop.index }}</td>
          <td>{{ to.task}}</td>
          <td>{{ to.crDate}}</td>
          <td>{{ to.upDate}}</td>
          <!-- <td>{{ to.task}}</td> -->

          <td>
              <a href="/todo/edit/{{ to.id }}">edit</a>
              <a href="/todo/delete/{{ to.id }}">delete</a>
              <a href="/todo/complete/{{ to.id }}">complete</a>
          </td>
      </tr>
    {% endfor %}
    </tbody>
</table>
</body>
</html>
