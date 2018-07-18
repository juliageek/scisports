# scisports
##Assignment##

The app has one main component, App.vue, which serves as the external component where the other components are loaded.
So this is where I inserted `<router-view>` and where the other components are loaded dynamically.

There are 2 routes `/select-player`(the default one) and `/select-position`, corresponding to the 2 components mentioned above: *SelectPlayer* and *SelectPosition*.

I only finalized *SelectPlayer*, while SelectPosition is just a dummy template for the time being.
SelectPlayer imports a store found in `vuex/index.js`. Once the user starts typing in the searchbar, the `players` array in the store (which is initially an empty array) gets populated with the filtered data, showing the filtered players and checkboxes for the user to click in to select the player. The communication between the component and the store is being done through a computed property, searchWord, which has a getter and a setter. The setter dispatches an action in the store, called `filterPlayers`, which commits a mutation, also named `filterPlayers`, which basically filters the data based on whether the player name contains the typed string or not.

Once the user selects at least one player, the "Next" button at the bottom of the form is enabled and the user can navigate to the next form.

The trickiest part for me was working with states and immutabilty, as I had to be mindful that I cannot modify the data when and however I pleased. And example is the `selectPlayer` mutation, which is triggered by the `selectPlayer` action. It basically has to find the selected player sent from the view and modify his data property to 'true or false'. The trick is that in order to preserve the immutability of the state object, we need to replace the player object completely in the array (so no push to the array).

The other tricky part was modifying the data coming from json, as I really needed the `checked: boolean` property. I kind of went the nasty shortcut way and overwritten the json structure (I know I am getting minus points for this). I am quite certain that there are "immutable-correct" ways to modify the data array, but I need to do my homework better with this point.

If I were to continue the project:

1. I'd fix the breadcrumbs on top of the forms (probably move them in a separate component altogether).
2. Set an empty state for SelectPlayer - what if the user doesn't find any name?
3. Finish the SelectPosition component.
4. Improve the Vuex store, as explained above, by removing the `checked: false` hardwritten property from each player object.



