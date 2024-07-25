<h1>Lost pet database</h1>

<p>This is an app using express, MongoDB, and Mongoose.  The user can see a list of missing pets, add their own, and create a user account.  The interface was made with Pug views.</p>

<p>Data seeding from jsons in application, just made up some dummy data, possibly based on pets in my neighborhood. Import file run from that folder for each collection</p>

<p>MongoDB has 3 collections: Dogs, Cats, and users. Each with a mongoose schema which has validation that they all must be strings.</p>
<p>The dog route includes</p>
<ul>
<li>get route for the listing of all lost dogs</li>
<li>post route to submit a lost dog</li>
<li>delete route on the server to remove a dog</li>
<li>put route to replace an entry with an updated entry</li>
</ul>
<p>The cat route is the same, just with cats and a collection of cats, instead of dogs.</p>
<p>the server.mjs pug rendered home page has a post route where you can sign up, entering your information into the user collection. It also serves as the main page to access the other pug files associated with the other collections.</p>