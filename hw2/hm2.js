var a = 1, b = 1, c, d;
    c = ++a; alert(c); // 2 -- префиксная форма оператора инкремент ++,-  берет первоначальное значение "а" и прибавляет к нему единицу.
    c = (2+ ++a); alert(c); // 5  --  сначала приоритет у инкремента и к "а" прибавляется 1 , мы уже прибавляли к "а" единицу и теперь а равно 3м, далее- выражение +2 и получаем 5
    d = (2+ b++); alert(d); // 4 - должно быть 3  "i++" - постфиксная форма  , он прибавляет 1 но если мы используем как результат то он возвращает исходное значение  то есть в "d" венется 3=2+1 
    alert(a); // 3 к "а" 2 раза прибавили 1цу   "c = ++a" "c = (2+ ++a)" получаем 3
    alert(b); // 3 - должно быть 2 , мы только 1дин раз прибавляем 1цу к "b" которая первоначально равна 1це , но в этом случае мы не используем результат мы просто озвучиваем переменную
//Необходимо разобраться 