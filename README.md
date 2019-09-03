# YoutubeTable

The following functions were implemented in this project:
- Sorting data by the following parameters (video, views, likes, dislikes, comments, publications);
- Selecting table columns;
- Player for watching videos;

As the data used Mock-date, which are in the file public/mock/list.json

I did not find the delete button on the layout, so I added it myself. Using this button you can delete all selected columns

Using the "Add to List" button, you can add one item taken from Mock-date from file public/mock /add_list.json

Used "redux" to manage application data, also to simulate the state of data loading

I also implemented the following functionality:

For table column for the video. When you play, the size of the player increases and the description for the video is hidden. When the video is paused, the container returns to its original form.

But I have problems rewinding the video, the player perceives rewinding as a pause. So after rewinding happen resizing video player.
## Technologies
The following technologies were used to implement this project:
- react
- redux
- redux-thunk
- react-player(video player)

## Installation

Use the package manager [npm](https://www.npmjs.com/) for install node modules.
```bash
npm install
```
For run project use command
 ```bash
npm start
 ```
