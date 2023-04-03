window.fetchData = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'https://j63o0nohm4.execute-api.eu-central-1.amazonaws.com/default/sql_summary',
      type: 'GET',
      dataType: 'json',
      success: function(sum_data) {
      const rows = sum_data.map(row => [row.hisse, row.num_of_tr, row.total_qt, row.avg_buy,
        row.cur_price, row.avg_pl, row.top_pl, row.cur_port]);
      const columns = ['Hisse', 'İşlem Sayısı', 'Toplam Miktar', 'Ort. Maliyet', 
        'Güncel Fiyat', 'Ort. K/Z', 'Toplam K/Z', 'Toplam Portföy'];

        if ($.fn.DataTable) {
        const table = $('#tabledeneme2').DataTable({
          data: rows,
          columns: columns.map(header => ({ title: header })),
          paging: false,
          searching: false,
          info: false,
          lengthChange: false
        });
        table.draw();
        } else {
          console.log("Datatables.js yüklenemedi");
          $.getScript('lib/datatable/datatables.min.js', function() {
            const table = $('#tabledeneme2').DataTable({
              data: rows,
              columns: columns.map(header => ({ title: header })),
              paging: false,
              searching: false,
              info: false,
              lengthChange: false
            });
            table.draw();
            console.log("Table Oluşturuldu");
          });
        }

      const sum = sum_data.map(row => parseFloat(row.cur_port)).reduce((a, b) => a + b, 0);
      try {
        document.getElementById('total_money').innerText = + Math.round(sum,4) + " ₺";
      }
      catch(err) {
        console.log(err);
      }
        resolve({
          categories: sum_data.map(row => row.hisse),
          columnData: sum_data.map(row => parseFloat(row.avg_buy)),
          lineData: sum_data.map(row => parseFloat(row.cur_price)),
          pieData: sum_data.map(row => [row.hisse, parseFloat(row.cur_port)])
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(`Error fetching data: ${textStatus}`);
        reject(errorThrown);
      }
    });
  });
}

// data.js




// https://udp68grr8l.execute-api.eu-central-1.amazonaws.com/default/temettu

