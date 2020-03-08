var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:4000");

const defaultData = [
  {
    id: 1,
    title: "First",
    text: "First_note_long_text"
  },
  {
    id: 2,
    title: "Second",
    text: "Second_note_long_text"
  },
  {
    id: 3,
    title: "Third",
    text: "Third_note_long_text"
  },
  {
    id: 4,
    title: "Fourth",
    text: "Fourth_note_long_text"
  },
  {
    id: 5,
    title: "Fifth",
    text: "Fifth_note_long_text"
  }
];

// own implementation of simple deep comparison
const simpleDeepEqual = (obj1, obj2) =>
  JSON.stringify(obj1).should.equal(JSON.stringify(obj2));

const simpleDeepCopy = obj => JSON.parse(JSON.stringify(obj));

describe("simple-notes-server unit tests", function() {
  // tests return of default data
  it("should return all notes", function(done) {
    // calling home page api
    server
      .get("/notes")
      .expect("Content-type", /json/)
      .expect(200) // THis is HTTP response
      .end(function(err, res) {
        if (err) done(err);

        res.status.should.equal(200);
        res.body.success.should.equal(true);
        res.body.message.should.equal("Notes successfully retrieved");

        const data = res.body.data;
        simpleDeepEqual(data, defaultData);
        done();
      });
  });

  // tests update of the first item
  it("should update a note", function(done) {
    const newTitle = "new-title";
    const newText = "new-text";

    server
      .put("/notes/1")
      .send({ title: newTitle, text: newText })
      .expect("Content-type", /json/)
      .expect(200) // THis is HTTP response
      .end(function(err, res) {
        if (err) done(err);

        res.status.should.equal(200);
        res.body.success.should.equal(true);
        res.body.message.should.equal("Note with id=1 successfully updated");

        const correctData = simpleDeepCopy(defaultData);
        correctData[0].title = newTitle;
        correctData[0].text = newText;

        simpleDeepEqual(res.body.data, correctData);

        done();
      });
  });
});
