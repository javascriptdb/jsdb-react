Install
```shell
npm i @jsdb/react
```
Import useLive custom hook
```js
import {useLive, DatabaseMap} from "@jsdb/react";
```
Use it on your component, you just need to pass a reference to what ever object or property you want to listen in realtime.
```js
const projects = new DatabaseMap('projects');

export default function Home({projectId}) {
  let project = useLive(projects[projectId]);

  return (
    <div>
      {project?.name}
    </div>
  )
}
```
