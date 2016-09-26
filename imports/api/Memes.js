import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Memes = new Mongo.Collection('memes');

Meteor.methods({
    'memes.insert'(name, content) {
        check(name, String);
        check(content, String);

        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Memes.insert({
            name,
            content,
            memeId: Math.round((Math.pow(36, 10 + 1) - Math.random() * Math.pow(36, 10))).toString(36).slice(1),
            createdAt: new Date(), // current time
            owner: Meteor.userId(),
            username: Meteor.user().username.toString(),
        });
    }
})