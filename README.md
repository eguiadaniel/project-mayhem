# Mayhem Project

Required Mongo DB Download Community version [here!](https://www.mongodb.com/try/download/community?tck=docs_server)

## ROUTE Structure

<table>
    <tr>
      <td>PAGE</td>
      <td>METHOD</td>
      <td>PATH</td>
      <td>DESCRIPTION</td>
    </tr>
      <tr>
      <td>Home</td>
      <td>GET</td>
      <td>/</td>
      <td>Homepage</td>
    </tr>
      <tr>
      <td>Effects Gallery</td>
      <td>GET</td>
      <td>/effects</td>
      <td>Gallery with available effects</td>
    </tr>
      <tr>
      <td>Single Effect</td>
      <td>GET</td>
      <td>/effects/:id</td>
      <td>Title and description of single effect. Button to Create</td>
    </tr>
      <tr>
      <td>Create Custom Video</td>
      <td>GET</td>
      <td>/effects/:id/create</td>
      <td>Users text and logo uploading form</td>
    </tr>
          <tr>
      <td>Create Custom Video</td>
      <td>POST</td>
      <td>/effects/:id/create</td>
      <td>Users input sent to DB</br><small>*Route wihtout id for testing</small></td>
    </tr>
            <tr>
      <td>View Custom Video</td>
      <td>GET</td>
      <td>/video/:id</td>
      <td>Reveal the output</td>
    </tr>
</table>


