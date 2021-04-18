import { useState, useEffect } from 'react';
import firebase from '../../Firebase';
import { v4 } from 'uuid';

export default function Items() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        let doc = firebase.collection('posts');
        doc.get().then(posts => {
            posts.forEach(post => {
                console.log(post.data());
            })
        })
        /*doc.add({
            id: v4(),
        }).then(docRef => {
            console.log('docRef => ', docRef);
        }).catch(error => {
            console.log('error => ', error);
        })*/

        /*doc.get().then(i => {
            i.forEach(a => {
                console.log(a.id, ' => ', a.data());
            })
        })*/
    });

    return (
        <div></div>
    );
}