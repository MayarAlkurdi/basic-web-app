import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });


    test('should return name', () => {
        const query = "what is your name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "mayar"
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 5 multiplied 5?")).toEqual("25");
        expect(QueryProcessor("What is 12 multiplied 1?")).toEqual("12");
    });


    test('should minus numbers', () => {
        expect(QueryProcessor("What is 5 minus 5?")).toEqual("0");
        expect(QueryProcessor("What is 12 minus 1?")).toEqual("11");
    });

    test('should power numbers', () => {
        expect(QueryProcessor("What is 68 to the power of 68?")).toEqual("4.0794917954274785e+124");
    });


    test('should compare numbers', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 76, 67, 82?")).toEqual("82");
        expect(QueryProcessor("Which of the following numbers is the largest: 48, 95, 41?")).toEqual("95");
    });

});

