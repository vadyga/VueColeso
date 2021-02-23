<?
var_dump($_POST);
if(isset($_POST['email'])){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'ivaadim@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заказ с 2koleso.ru'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Товар: '.$_POST['product'].'</p>
                        <p>Количество: '.$_POST['productCount'].'</p>
                        <p>Почта: '.$_POST['email'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>