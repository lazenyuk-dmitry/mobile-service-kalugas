<?
var_dump($_POST);
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'lekerman@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Заказ на ремонт'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Продукт: '.$_POST['product'].'</p>
                        <p>Модель: '.$_POST['model'].'</p>
                        <p>Цвет: '.$_POST['color'].'</p>
                        <p>Поломки: <br>'.$_POST['problem'].'</p>
                        <p>На сумму: '.$_POST['totalPrice'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Заказ на ремонт\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>