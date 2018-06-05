'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_INDENT = 50;
var TITLE_TEXT_PADDING = 40;
var TEXT_INDENT = 20;
var TEXT_LINE_HEIGHT = 16;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  // Cloud
  renderCloud(ctx, CLOUD_X + SHADOW, CLOUD_Y + SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  // Text
  ctx.fillStyle = '#000';
  ctx.font = '16 px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_INDENT, TITLE_TEXT_PADDING);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_INDENT, TITLE_TEXT_PADDING + TEXT_INDENT);
  // Render bars
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var barHeight = (BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_INDENT + (BAR_INDENT + BAR_WIDTH) * i, CLOUD_HEIGHT);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_INDENT + (BAR_INDENT + BAR_WIDTH) * i, CLOUD_HEIGHT - barHeight - TEXT_INDENT - TEXT_LINE_HEIGHT);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toFixed(1) + ')';
    }
    ctx.fillRect(CLOUD_X + BAR_INDENT + (BAR_INDENT + BAR_WIDTH) * i, CLOUD_HEIGHT - TEXT_INDENT, BAR_WIDTH, -barHeight);
  }
};
