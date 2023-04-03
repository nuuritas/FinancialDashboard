
fetchTemettu = function() {
    $.ajax({
      url: 'https://udp68grr8l.execute-api.eu-central-1.amazonaws.com/default/temettu',
      type: 'GET',
      dataType: 'json',
      success: function(temettu_data) {
        console.log(temettu_data);
        ['date','hisse','hisse_basi_oran','hisse_basi_net_turar', 'uc_yil_tem_buyume', 'uc_yil_net_kar_buyume', 'uc_yil_temettu_oran', 'pd_dd', 'f_k']
      const rows = temettu_data.map(row => [row.date, row.hisse, row.hisse_basi_oran, row.hisse_basi_net_turar,
        row.uc_yil_tem_buyume, row.uc_yil_net_kar_buyume, row.uc_yil_temettu_oran, row.pd_dd, row.f_k]);
      const columns = ['Tarih', 'Hisse', 'Hisse Başı Oran', 'Hisse Başı Net Tutar',"Üç Yıl Temettü Büyüme", 
      "Üç Yıl Net Kar Büyüme", "Üç Yıl Temettü Oranı", "PD/DD", "F/K"]; 
  
        if ($.fn.DataTable) {
        const table = $('#tabletemettu').DataTable({
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
            const table = $('#tabletemettu').DataTable({
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
      }
    });
}

$(document).ready(function() {
    fetchTemettu();
});