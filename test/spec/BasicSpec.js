(function() {
  "use strict";

  describe('SpeechKITT', function() {

    it('should exist in global namespace', function () {
      expect(SpeechKITT).toEqual(jasmine.any(Object));
    });

    it('should contain setStartCommand method', function () {
      expect(SpeechKITT.setStartCommand).toEqual(jasmine.any(Function));
    });

    it('should contain setAbortCommand method', function () {
      expect(SpeechKITT.setAbortCommand).toEqual(jasmine.any(Function));
    });

    it('should contain startRecognition method', function () {
      expect(SpeechKITT.startRecognition).toEqual(jasmine.any(Function));
    });

    it('should contain abortRecognition method', function () {
      expect(SpeechKITT.abortRecognition).toEqual(jasmine.any(Function));
    });

  });

  describe('SpeechKITT.setStartCommand', function() {

    it('should throw an error when called without a callback function', function () {
      expect(function() {
        SpeechKITT.setStartCommand();
      }).toThrowError();
    });

    it('should throw an error when called with an invalid callback function', function () {
      expect(function() {
        SpeechKITT.setStartCommand(undefined);
        SpeechKITT.setStartCommand('blerg');
      }).toThrowError();
    });

    //@TODO: define test different contexts

  });

  describe('SpeechKITT.setAbortCommand', function() {

    it('should throw an error when called without a callback function', function () {
      expect(function() {
        SpeechKITT.setAbortCommand();
      }).toThrowError();
    });

    it('should throw an error when called with an invalid callback function', function () {
      expect(function() {
        SpeechKITT.setAbortCommand(undefined);
        SpeechKITT.setAbortCommand('blerg');
      }).toThrowError();
    });

  });

  describe('SpeechKITT.startRecognition', function() {

    beforeEach(function() {
      Corti.patch();
    });

    afterEach(function() {
      Corti.unpatch();
    });

    it('should throw an error when called before setting a start command', function () {
      expect(function() {
        SpeechKITT.startRecognition();
      }).toThrowError();
    });

    it('should start SpeechRecognition', function () {
      SpeechKITT.setStartCommand(SpeechRecognition.start);
      expect(SpeechRecognition.isStarted()).toBe(false);
      SpeechKITT.startRecognition();
      expect(SpeechRecognition.isStarted()).toBe(true);
      SpeechKITT.startRecognition();
      expect(SpeechRecognition.isStarted()).toBe(true);
    });

  });

  describe('SpeechKITT.abortRecognition', function() {

    beforeEach(function() {
      Corti.patch();
    });

    afterEach(function() {
      Corti.unpatch();
    });

    it('should throw an error when called before setting an abort command', function () {
      expect(function() {
        SpeechKITT.abortRecognition();
      }).toThrowError();
    });

    it('should abort SpeechRecognition', function () {
      SpeechKITT.setStartCommand(SpeechRecognition.start);
      SpeechKITT.setAbortCommand(SpeechRecognition.abort);
      expect(SpeechRecognition.isStarted()).toBe(false);
      SpeechKITT.startRecognition();
      expect(SpeechRecognition.isStarted()).toBe(true);
      SpeechKITT.abortRecognition();
      expect(SpeechRecognition.isStarted()).toBe(false);
      SpeechKITT.abortRecognition();
      expect(SpeechRecognition.isStarted()).toBe(false);
    });

  });

})();
