<template>
  <div class="admin-index">
    <div class="index-statistic row">
      <div class="statistic-graph col-lg-8">
        <div class="row">
          <div class="statistic-graph-title col-md-3 col-sm-3">
            <h5 style="margin: 1.5vw auto;">最近一周访客统计</h5>
          </div>
        </div>
        <div class="ct-chart ct-golden-section" id="chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      chartData: {
        labels: ['2021-01-14', '2021-01-15', '2021-01-16', '2021-01-17',
          '2021-01-18', '2021-01-19', '2021-01-20'],
        series: [[0, 2, 3, 4, 2, 4, 5]]
      }
    }
  },
  mounted () {
    let that = this
    // eslint-disable-next-line no-new,no-undef
    new Chartist.Line('#chart', that.chartData, {
      axisY: {
        onlyInteger: true
      }
    })
  }
}
</script>

<style scoped>
  .statistic-graph {
    max-height: 25vw;
    border: solid 0.5px;
    border-radius: 1vw;
    border-color: #eee;
    background-color: white;
    margin: 1vw 2vw;
  }

  .index-statistic {
    max-height: 20vw;
  }

  #chart {
    max-height: 20vw;
  }

  .admin-index {
    background: #f4f8f9;
    padding-bottom: 60px;
  }

  .ct-series .ct-series-a {
    stroke: #10b7ff;
    stroke-width: 1px;
  }
</style>
