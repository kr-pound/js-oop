function Stopwatch() {
    let running = false;
    let startTime = null;
    let stopTime = null;
    let duration = 0;

    this.start = function() {
        if (running)
            throw new Error('Stopwatch has already started');
        running = true;
        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch is not started');
        running = false;
        stopTime = new Date();

        const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        running = false;
        startTime = null;
        stopTime = null;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
}

const sw = new Stopwatch();

console.log(sw.duration);
sw.start();
//sw.start();

sw.stop();
//sw.stop();